# Deploying VisionBoard AI Website to Vercel

This guide provides detailed steps to deploy your Next.js website to Vercel.

## Prerequisites

1. **GitHub Account** (recommended) or GitLab/Bitbucket
2. **Vercel Account** (free tier available)
3. **Node.js** installed locally (for testing)

## Method 1: Deploy via Vercel Dashboard (Recommended for First Time)

### Step 1: Prepare Your Repository

1. **Initialize Git** (if not already done):
   ```bash
   cd visionboard-ai-website
   git init
   ```

2. **Create a `.gitignore` file** (if not exists):
   ```bash
   # Already created, but verify it includes:
   # node_modules
   # .next
   # .env*.local
   ```

3. **Commit your code**:
   ```bash
   git add .
   git commit -m "Initial commit: VisionBoard AI landing page"
   ```

### Step 2: Push to GitHub

1. **Create a new repository on GitHub**:
   - Go to https://github.com/new
   - Name it: `visionboard-ai-website` (or your preferred name)
   - Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license

2. **Push your code**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/visionboard-ai-website.git
   git branch -M main
   git push -u origin main
   ```

### Step 3: Deploy to Vercel

1. **Sign up/Login to Vercel**:
   - Go to https://vercel.com
   - Click "Sign Up" or "Log In"
   - Sign in with GitHub (recommended)

2. **Import Project**:
   - Click "Add New..." → "Project"
   - Select your GitHub repository (`visionboard-ai-website`)
   - Click "Import"

3. **Configure Project**:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

4. **Environment Variables** (if needed):
   - Currently, no environment variables are required
   - If you add any later, add them here

5. **Deploy**:
   - Click "Deploy"
   - Wait for build to complete (2-3 minutes)
   - Your site will be live at: `https://visionboard-ai-website.vercel.app`

### Step 4: Custom Domain (Optional)

1. **Add Custom Domain**:
   - Go to your project settings
   - Click "Domains"
   - Add your domain (e.g., `visionboardai.com`)
   - Follow DNS configuration instructions

## Method 2: Deploy via Vercel CLI (For Developers)

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

This will open your browser to authenticate.

### Step 3: Deploy

```bash
cd visionboard-ai-website
vercel
```

Follow the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Select your account
- **Link to existing project?** → No (first time)
- **Project name?** → `visionboard-ai-website` (or press Enter)
- **Directory?** → `./` (press Enter)
- **Override settings?** → No (press Enter)

### Step 4: Production Deploy

```bash
vercel --prod
```

This deploys to production URL.

## Post-Deployment Checklist

### ✅ Verify Deployment

1. **Check Build Logs**:
   - Go to Vercel Dashboard → Your Project → Deployments
   - Check for any build errors

2. **Test Your Site**:
   - Visit your deployment URL
   - Test all pages:
     - Home page
     - Privacy page (`/privacy`)
     - Terms page (`/terms`)
     - Contact page (`/contact`)
     - Feedback page (`/feedback`)

3. **Check Assets**:
   - Verify logo loads correctly
   - Check fonts are loading
   - Test responsive design on mobile

### ✅ Common Issues & Fixes

1. **404 Errors on Routes**:
   - Ensure all page files are in `app/` directory
   - Check file names match routes exactly

2. **Images Not Loading**:
   - Verify image paths start with `/` (e.g., `/assests/logo-3.png`)
   - Check files are in `public/` directory

3. **Fonts Not Loading**:
   - Verify font files are in `public/fonts/`
   - Check `globals.css` font paths are correct

4. **Build Errors**:
   - Check Node.js version (Vercel uses Node 18.x by default)
   - Review build logs in Vercel dashboard

## Continuous Deployment

Once connected to GitHub:
- **Automatic Deployments**: Every push to `main` branch triggers a production deployment
- **Preview Deployments**: Pull requests get preview URLs automatically
- **Branch Deployments**: Other branches get preview URLs

## Environment Variables (Future Use)

If you need to add environment variables later:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add variables:
   - Name: `NEXT_PUBLIC_API_URL`
   - Value: Your API URL
   - Environment: Production, Preview, Development

## Performance Optimization

Vercel automatically:
- ✅ Optimizes images
- ✅ Enables compression
- ✅ CDN distribution
- ✅ Edge caching
- ✅ Automatic HTTPS

## Monitoring & Analytics

1. **Vercel Analytics** (Optional):
   - Go to Project Settings → Analytics
   - Enable Web Analytics (free tier available)

2. **Check Performance**:
   - View deployment logs
   - Monitor build times
   - Check error rates

## Updating Your Site

1. **Make Changes Locally**:
   ```bash
   # Make your changes
   git add .
   git commit -m "Update: description of changes"
   git push origin main
   ```

2. **Automatic Deployment**:
   - Vercel automatically detects the push
   - Builds and deploys your changes
   - Usually takes 2-3 minutes

## Rollback (If Needed)

1. Go to Vercel Dashboard → Deployments
2. Find the previous working deployment
3. Click "..." → "Promote to Production"

## Support

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Support**: https://vercel.com/support

---

## Quick Reference Commands

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Build locally
npm run build

# Test production build locally
npm start

# Deploy to Vercel (CLI)
vercel

# Deploy to production (CLI)
vercel --prod

# View deployments
vercel ls
```

---

**Your site will be live at**: `https://visionboard-ai-website.vercel.app` (or your custom domain)

