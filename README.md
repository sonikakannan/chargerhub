Here is your complete and updated `README.md` file that includes all features, including the new **pagination** functionality:

---

# ⚡ ChargerHub – EV Charging Station Management App

This full-stack application allows users to manage EV charging stations. It includes authentication, CRUD operations, map-based visualization, and pagination.

---

## 📚 Tech Stack

### 🔙 Backend

* **Node.js**
* **Express.js**
* **MongoDB** (with Mongoose)
* **JWT** for user authentication

### 🌐 Frontend

* **React**
* **Redux Toolkit** with `@reduxjs/toolkit/query`
* **React-Leaflet** for OpenStreetMap integration
* **Tailwind CSS** (if used)

---

## ✨ Features

### ✅ Backend

* **User Authentication with JWT**

  * Register
  * Login
* **Charging Station Management (Protected Routes)**

  * Create a new charging station
  * Get (list) all stations
  * Update a station
  * Delete a station
* **Charging Station Fields**

  * `name`
  * `location (latitude, longitude)`
  * `status` (Active/Inactive)
  * `powerOutput (kW)`
  * `connectorType`
* **Pagination Support**

  * Example: `GET /api/stations?page=1&limit=5`

### ✅ Frontend

* **Login Page**
* **Charger Listing Page**

  * Displays 5 chargers per page (pagination)
  * Filters: status, power output, connector type
  * Add, Edit, and Delete charging stations
* **Map View (OpenStreetMap)**

  * Interactive markers via React-Leaflet
  * Click a marker to view charger details

---

## 🛠️ Setup Instructions

### 🔙 Backend

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file with the following variables:

   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. Run the backend server:

   ```bash
   npm run dev
   ```

---

### 🔜 Frontend

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file with:

   ```env
   VITE_API_URL=https://your-backend-url.com/api
   ```

4. Run the frontend:

   ```bash
   npm run dev
   ```

---

## 🌍 Deployment

* **Frontend Deployed On**: \[e.g., Vercel/Firebase/Netlify]
  🔗 [https://your-frontend-url.com](https://your-frontend-url.com)

* **Backend Deployed On**: \[e.g., Render/Heroku]
  🔗 [https://your-backend-url.com/api](https://your-backend-url.com/api)

* (Optional) ✅ **API Documentation**: Swagger/Postman collection available in the `/docs` or `postman_collection.json`.

---

## 🗂️ Project Structure

```
/backend     # Express API
/frontend    # React UI
```

---

## 📅 Timeline

* **Day 1**: Backend (Auth + CRUD)
* **Day 2**: Frontend Login + Station Listing
* **Day 3**: Map Integration
* **Day 4**: Pagination + Filtering
* **Day 5**: Deployment + Documentation

---

## 📬 Submission

* 🔗 GitHub Repository: [https://github.com/sonikakannan/chargerhub](https://github.com/sonikakannan/chargerhub)
* 🔗 Frontend Live: [https://your-frontend-url.com](https://your-frontend-url.com)
* 🔗 Backend API: [https://your-backend-url.com/api](https://your-backend-url.com/api)

---

## 📸 Screenshots

> *You can add screenshots of login page, listing with pagination, and map view here.*

---

Let me know if you'd like help creating a Postman collection or if you want to automate pagination buttons in the frontend.
