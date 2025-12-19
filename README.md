# IronFit E-Commerce

Live link=https://e-commerce-frontend-nd1a.onrender.com

## Projects
This repository contains two projects:
1. `vite-app`: The React Frontend (Vite + Tailwind).
2. `backend`: The Spring Boot Backend (Java + PostgreSQL).

## Getting Started

### Prerequisites
- Node.js (for frontend)
- Java 17+ (for backend)
- Maven (for backend)
- PostgreSQL (database)

### 1. Database Setup
Create a PostgreSQL database named `ironfit`.
```sql
CREATE DATABASE ironfit;
```
Update `backend/src/main/resources/application.properties` if your credentials differ from `postgres/postgres`.

### 2. Backend Setup
Navigate to `backend` folder:
```bash
cd backend
mvn spring-boot:run
```
The backend will start on `http://localhost:8080`.

### 3. Frontend Setup
Navigate to root/vite-app folder:
```bash
cd vite-app
npm install
npm run dev
```
The frontend will start on `http://localhost:5173`.

### Features
- **Authentication**: Register and Login with JWT.
- **Products**: Browse products backed by database.
- **Cart**: Add items to cart (requires login).
- **Checkout**: Place orders.

## API Endpoints
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/products`
- `GET /api/cart`
- `POST /api/cart/add`
- `POST /api/cart/checkout`


