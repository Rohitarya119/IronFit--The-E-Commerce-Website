# Deployment Guide: Vercel (Frontend) & Railway (Backend)

This guide will help you deploy your E-commerce application.

## Prerequisites
- A GitHub account.
- Accounts on [Vercel](https://vercel.com) and [Railway](https://railway.app).
- The latest code pushed to a GitHub repository.

---

## Part 1: Prepare the Backend (Railway)

1.  **Log in to Railway** and click **New Project** > **Deploy from GitHub repo**.
2.  Select your repository.
3.  **Important**: Since your backend is in a stored folder, you must configure the **Root Directory**.
    - Click on the new service card.
    - Go to **Settings** > **Root Directory** and set it to `/backend`.
4.  **Add a Database**:
    - Right-click on the canvas (or click "New") -> **Database** -> **PostgreSQL**.
    - This will create a connected database service.
5.  **Configure Environment Variables**:
    - Click on your **Backend Service** (the Java app).
    - Go to the **Variables** tab.
    - Add the variables using the values from your PostgreSQL service (click the Postgres card > **Variables** to find these):
        - `DB_URL`: Copy `DATABASE_URL` (starts with `postgresql://...`)
        - `DB_USERNAME`: Copy `POSTGRES_USER`
        - `DB_PASSWORD`: Copy `POSTGRES_PASSWORD`
    - Add these additional variables:
        - `JWT_SECRET`: (Generate a long random string or use `5367566B59703373367639792F423F4528482B4D6251655468576D5A71347437`)
        - `PORT`: `8085` (Optional, but good to be explicit)
        - `ALLOWED_ORIGINS`: `*` (Temporarily allow all to test, changed later to your Vercel URL).
6.  **Deploy**: Railway should automatically deploy. Wait for the green "Active" checkmark.
7.  **Get Public URL**:
    - Go to **Settings** -> **Networking** -> **Generate Domain**.
    - Copy this URL (e.g., `https://ecommerce-production.up.railway.app`).

---

## Part 2: Prepare the Frontend (Vercel)

1.  **Log in to Vercel** and click **Add New** > **Project**.
2.  Import your GitHub repository.
3.  **Configure Project**:
    - **Framework Preset**: Vite (should be auto-detected).
    - **Root Directory**: Leave as default (`./`) since `package.json` is in the root.
4.  **Environment Variables**:
    - Expand the **Environment Variables** section.
    - Add `VITE_API_URL`.
    - Value: `https://<YOUR_RAILWAY_URL>/api` (Paste your Railway URL and append `/api`).
      - Example: `https://ecommerce-production.up.railway.app/api`
5.  **Deploy**: Click **Deploy**.
6.  Once deployed, copy your **Vercel Deployment URL** (e.g., `https://your-project.vercel.app`).

---

## Part 3: Final Security Config

1.  Go back to **Railway**.
2.  Select your Backend Service > **Variables**.
3.  Update `ALLOWED_ORIGINS` to your actual Vercel URL (e.g., `https://your-project.vercel.app`).
    - Note: Do not include trailing slashes.
4.  Railway will redeploy automatically.

Your app is now live!
