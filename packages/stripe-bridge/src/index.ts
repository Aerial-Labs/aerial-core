/**
 * Stripe Bridge Module
 * Shared logic for handling Stripe sessions and webhooks.
 */

export interface StripeSessionConfig {
  apiKey: string;
  frontendUrl: string;
}

export async function createCheckoutSession(
  config: StripeSessionConfig,
  userId: string,
  priceId: string
) {
  const formData = new URLSearchParams();
  formData.append('success_url', `${config.frontendUrl}/success?session_id={CHECKOUT_SESSION_ID}`);
  formData.append('cancel_url', `${config.frontendUrl}/cancel`);
  formData.append('mode', 'subscription');
  formData.append('line_items[0][price]', priceId);
  formData.append('line_items[0][quantity]', '1');
  formData.append('client_reference_id', userId);

  const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${config.apiKey}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData.toString(),
  });

  return await response.json();
}
