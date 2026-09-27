# iLogBC

## Project

iLogBC is a website for a logistics and blockchain consulting company. It covers shipping, ports, infrastructure, manufacturing, supply chains, investment, compliance and business entry into India.

The website includes a home page, services page, separate service pages, industries page, About page, contact form UI and a responsive menu.

## Tech Stack

- React 19
- Vite
- React Router
- Tailwind CSS 4
- Lucide React

## Running Locally

From the project folder, install the frontend dependencies:

```bash
npm install --prefix client
```

Start the frontend:

```bash
npm run dev:client
```

Open `http://localhost:3000` to view the website. The contact form is included as a frontend interaction for this assessment.

To create a production build:

```bash
npm run build:client
```

## Live Website

The project is deployed on Vercel:

```text
https://ilogbc-ashy.vercel.app/
```

The `vercel.json` file builds the client and keeps page links working after refresh. No backend or database setup is required for the UI assessment.

## Design Approach

### Design direction

The design uses a clean consulting style with a more active logistics feel. It uses cream backgrounds, dark sections, gold accents, serif headings and simple sans-serif text.

### BCG influence

BCG influenced the clear layout and structured way of presenting information. The site uses short sections, clear headings and content that is easy to scan. It does not copy BCG's branding.

### What is intentionally different

The site is more interactive than a standard consulting website. It uses video backgrounds, service cards, swipeable sections, image-based industry cards, animations and different layouts for each service page.

### iLogBC brand

The iLogBC brand uses dark colors, cream backgrounds and gold highlights. Gold is mainly used for buttons, active items and important details. The typography is meant to feel professional but approachable.

## Key UX Decisions

1. **Easy service access:** The menu and services page make it easy to find all nine services.
2. **Useful card interactions:** Cards show more information when the user hovers over them.
3. **Mobile support:** Horizontal scrolling and swipeable cards work on small screens.
4. **Stable layout:** Hover animations do not move or overlap nearby cards.
5. **Simple contact flow:** Consultation buttons and the same contact form are available throughout the website.
