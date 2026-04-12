# Interview AI YT

This repository has two separate apps:

- `Frontend`: React + Vite client
- `Backend`: Express API with MongoDB, auth cookies, PDF parsing, Gemini, and Puppeteer

## Netlify Deployment

Netlify is a good fit for the `Frontend` app in this repo. The `Backend` should be deployed to a Node-friendly host such as Render, Railway, Fly.io, or a VPS.

The root [`netlify.toml`](/d:/aiproject/interview-ai-yt/netlify.toml) is already configured so Netlify will:

- build from `Frontend`
- run `npm run build`
- publish `Frontend/dist`
- redirect SPA routes to `index.html`

## Recommended Production Setup

1. Deploy `Backend` first on a Node host.
2. Set the backend environment variables from [`Backend/.env.example`](/d:/aiproject/interview-ai-yt/Backend/.env.example).
3. Set `FRONTEND_URL` on the backend to your Netlify site URL, for example `https://your-site.netlify.app`.
4. In Netlify, create a new site from this repo.
5. Add `VITE_API_URL` in Netlify with the deployed backend URL, for example `https://your-api.onrender.com`.
6. Deploy the site.

## Netlify Settings

If you prefer configuring Netlify in the UI, use:

- Base directory: `Frontend`
- Build command: `npm run build`
- Publish directory: `dist`

## Frontend Environment Variable

Netlify needs this variable for production:

```env
VITE_API_URL=https://your-backend-domain.com
```

You can start from [`Frontend/.env.example`](/d:/aiproject/interview-ai-yt/Frontend/.env.example).

## Backend Environment Variables

The backend needs values equivalent to:

```env
PORT=3000
NODE_ENV=production
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_GENAI_API_KEY=your_google_genai_api_key
FRONTEND_URL=https://your-site.netlify.app
```

If you use a custom domain on Netlify, set `FRONTEND_URL` to that domain instead.

## Important Note About Hosting Everything on Netlify

The current backend is not set up as Netlify Functions. It uses a long-running Express server and Puppeteer-based PDF generation, so deploying the API to Netlify would require a larger refactor.

If you want, the next step can be:

- frontend on Netlify + backend on Render/Railway
- or a refactor plan to move the backend toward serverless hosting
