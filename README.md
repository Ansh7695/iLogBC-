# iLogBC-

## Vercel deployment

Import this repository into Vercel with the repository root as the project root. The included `vercel.json` builds the Vite client from `client/`, serves React Router routes correctly, and exposes the contact form at `/api/contact`.

Add this Vercel environment variable before deploying:

```text
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ilogbc
```
