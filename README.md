# VisionBoard AI Landing Page

A premium, conversion-focused landing page for VisionBoard AI mobile app.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide Icons
- **Fonts:** SF Pro Display & SF Pro Text

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and deploy

## Project Structure

```
visionboard-ai-website/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── HeroSection.tsx
│   ├── HowItWorksSection.tsx
│   ├── FeaturesSection.tsx
│   ├── AffirmationSection.tsx
│   ├── TrustSection.tsx
│   ├── FinalCTASection.tsx
│   └── Footer.tsx
├── public/
│   └── fonts/              # SF Pro fonts (add your font files here)
└── package.json
```

## Font Setup

Add SF Pro Display and SF Pro Text font files to `public/fonts/`:
- `SFProDisplay-Bold.woff2`
- `SFProText-Regular.woff2`

If fonts are not available, the site will fall back to system fonts.

## Customization

### Colors

Edit `tailwind.config.ts` to customize the gradient colors:
- `vision-mint`: #B8E6D5
- `vision-blue`: #87CEEB
- `vision-pink`: #E8B4D4
- `vision-purple`: #D8A4D4
- `vision-orange`: #FFB347
- `vision-yellow`: #FFE66D

### Content

Edit component files in `components/` to update copy and content.

## License

Private project for VisionBoard AI.

