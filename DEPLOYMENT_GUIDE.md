# Deployment Guide: Render (Full Stack)

This guide will help you deploy your E-commerce application (Frontend + Backend + Database) entirely on [Render](https://render.com).

## Prerequisites
- A GitHub account.
- A [Render](https://render.com) account.
- The latest code pushed to your GitHub repository.

---

## Part 1: Create the Database (PostgreSQL)

1.  **Log in to Render** and click **New +** > **PostgreSQL**.
2.  **Name**: `ecommerce-db` (or any name you like).
3.  **Region**: Choose the one closest to you (e.g., specific region like Ohio, Frankfurt, etc).
4.  **Database**: `ironfit` (this is our specific DB name).
5.  **User**: `postgres` (or leave default).
6.  **Plan**: Select **Free**.
7.  Click **Create Database**.
8.  **Wait** for it to become "Available".
9.  Copy the **Internal Database URL** (should start with `postgres://...`). You will need this for the Backend.

---

## Part 2: Deploy the Backend (Web Service)

1.  Click **New +** > **Web Service**.
2.  Select **Build and deploy from a Git repository**.
3.  Connect your GitHub account and select your repository (`IronFit--The-E-Commerce-Website`).
4.  **Configuration**:
    - **Name**: `ecommerce-backend`
    - **Region**: Same as your database.
    - **Branch**: `main`
    - **Root Directory**: `backend` (Important!)
    - **Runtime**: **Docker** (Render will automatically detect the `Dockerfile` inside `backend/`).
    - **Instance Type**: **Free**.
5.  **Environment Variables**:
    - Scroll down to "Environment Variables" and add:
      - `DB_URL`: Paste the **Internal Database URL** you copied from the database.
      - `DB_USERNAME`: `postgres` (or whatever username is in the connection details).
      - `DB_PASSWORD`: Copy the password from the database details.
      - `JWT_SECRET`: (Generate a secure random string).
      - `ALLOWED_ORIGINS`: `*` (We will update this to the frontend URL later).
6.  Click **Create Web Service**.
7.  Render will start building. This might take a few minutes.
8.  Once live, copy the **Backend Service URL** (e.g., `https://ecommerce-backend.onrender.com`).

---

## Part 3: Deploy the Frontend (Static Site)

1.  Go to Dashboard, click **New +** > **Static Site**.
2.  Connect the same GitHub repository.
3.  **Configuration**:
    - **Name**: `ecommerce-frontend`
    - **Branch**: `main`
    - **Root Directory**: `./` (Leave default)
    - **Build Command**: `npm install && npm run build`
    - **Publish Directory**: `dist`
4.  **Environment Variables**:
    - Add `VITE_API_URL`: Paste your **Backend Service URL** (e.g., `https://ecommerce-backend.onrender.com/api`).
      - **Important**: Make sure to append `/api` at the end.
5.  Click **Create Static Site**.
6.  Wait for the build to finish.
7.  Once deployed, copy your **Frontend URL** (e.g., `https://ecommerce-frontend.onrender.com`).

---

## Part 4: Final Security Config

1.  Go back to your **Backend Service** on Render.
2.  Go to **Environment**.
3.  Edit `ALLOWED_ORIGINS` and set it to your **Frontend URL** (e.g., `https://ecommerce-frontend.onrender.com`).
    - Do not include a trailing slash.
4.  Save Changes. Render will automatically redeploy the backend.

Everything is now hosted on Render! 🚀
