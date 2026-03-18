import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { env } from 'hono/adapter';

// Bindings definition
type Bindings = {
  DB: D1Database;
  STRIPE_SECRET_KEY: string;
  FRONTEND_URL: string;
};

const app = new Hono<{ Bindings: Bindings }>();

// Middleware: Enable CORS for Next.js frontend
app.use('*', async (c, next) => {
  const corsMiddleware = cors({
    origin: c.env.FRONTEND_URL || 'http://localhost:3000',
    allowMethods: ['GET', 'POST', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });
  return corsMiddleware(c, next);
});

/**
 * 1. Mock Login (Upsert User to D1)
 * GET /api/login?userId=...&email=...
 */
app.get('/api/login', async (c) => {
  const userId = c.req.query('userId');
  const email = c.req.query('email') || `${userId}@example.com`;

  if (!userId) {
    return c.json({ error: 'userId is required' }, 400);
  }

  try {
    // Upsert logic for D1
    await c.env.DB.prepare(`
      INSERT INTO users (id, email, plan, status, updated_at)
      VALUES (?, ?, 'free', 'active', CURRENT_TIMESTAMP)
      ON CONFLICT(id) DO UPDATE SET
        email = excluded.email,
        updated_at = CURRENT_TIMESTAMP
    `).bind(userId, email).run();

    return c.json({ success: true, message: `Logged in as ${userId}` });
  } catch (err: any) {
    return c.json({ error: err.message }, 500);
  }
});

/**
 * 2. Create Stripe Checkout Session
 * POST /api/checkout
 */
app.post('/api/checkout', async (c) => {
  const { userId, planId } = await c.req.json();

  if (!userId) {
    return c.json({ error: 'userId is required' }, 400);
  }

  try {
    // Stripe API call (using native fetch to Stripe API)
    const formData = new URLSearchParams();
    formData.append('success_url', `${c.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`);
    formData.append('cancel_url', `${c.env.FRONTEND_URL}/cancel`);
    formData.append('mode', 'subscription');
    formData.append('line_items[0][price]', planId || 'price_xxxxxxxx'); // Pro Plan Price ID
    formData.append('line_items[0][quantity]', '1');
    formData.append('client_reference_id', userId); // SPEC: 含めること

    const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${c.env.STRIPE_SECRET_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    const session: any = await response.json();
    
    if (session.error) {
      throw new Error(session.error.message);
    }

    return c.json({ url: session.url });
  } catch (err: any) {
    return c.json({ error: err.message }, 500);
  }
});

/**
 * 3. Stripe Webhook (Handover to packages/stripe-bridge logic)
 * POST /api/webhook
 */
app.post('/api/webhook', async (c) => {
  const signature = c.req.header('stripe-signature');
  const body = await c.req.text();
  
  // Implementation note: Here we would use the logic from packages/stripe-bridge
  // For the minimal demo, we'll just log
  console.log('Webhook received', { signature });
  return c.json({ received: true });
});

export default app;
