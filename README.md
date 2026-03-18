# Aerial Core 🚀

Aerial Core is a lightweight, high-performance SaaS engine built with the Cloudflare ecosystem. It provides a solid foundation for building scalable web applications with minimal overhead.

## ✨ Features

- **Next Generation UI**: Built with Next.js (Pages Router) and Tailwind CSS.
- **Serverless API**: Powered by Hono and deployed on Cloudflare Workers.
- **Edge Database**: Integrated with Cloudflare D1 for globally distributed SQL.
- **Subscription Ready**: Pre-integrated Stripe Checkout flow.
- **Type Safe**: Fully written in TypeScript with shared types across packages.

## 🛠 Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) (Pages Router)
- **API Framework**: [Hono](https://hono.dev/)
- **Infrastructure**: [Cloudflare Workers](https://workers.cloudflare.com/)
- **Database**: [Cloudflare D1](https://developers.cloudflare.com/d1/)
- **Payments**: [Stripe](https://stripe.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

## 📁 Directory Structure

```text
aerial-core/
├── apps/
│   └── web/              # Next.js frontend (Cloudflare Pages)
├── workers/
│   └── api-engine/       # Hono API (Cloudflare Workers)
├── packages/
│   ├── db/               # D1 Schema & SQL scripts
│   └── stripe-bridge/    # Shared Stripe utility functions
└── wrangler.toml         # Base Cloudflare configuration
```

## 🚀 Getting Started

### 1. Prerequisites
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/)
- Node.js (v20+)

### 2. Installation
```bash
npm install
```

### 3. Database Setup (Local)
```bash
# Initialize local D1 database
npx wrangler d1 execute aerial-core-db --local --file=packages/db/schema.sql
```

### 4. Development
Run both frontend and worker in development mode:

**Frontend:**
```bash
cd apps/web
npm run dev
```

**API Worker:**
```bash
cd workers/api-engine
npx wrangler dev
```

## 🔑 Environment Variables

The project requires the following environment variables:

- `STRIPE_SECRET_KEY`: Your Stripe secret key.
- `FRONTEND_URL`: URL of your frontend (default `http://localhost:3000`).

Deploy secrets using:
```bash
npx wrangler secret put STRIPE_SECRET_KEY
```

## 📄 License
MIT © 2026 Aerial Inc.