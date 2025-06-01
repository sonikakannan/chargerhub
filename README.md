# ⚡ ChargerHub – EV Charging Station Management App
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
* **Tailwind CSS** 

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
  * Pagination Support
    
* **Charging Station Fields**

  * `name`
  * `location (latitude, longitude)`
  * `status` (Active/Inactive)
  * `powerOutput (kW)`
  * `connectorType`

### ✅ Frontend

* **Login Page**
* **Charger Listing Page**

  * Displays 5 chargers per page (pagination)
  * Filters: status, power output, connector type
  * Add, Edit, and Delete charging stations
* **Map View (OpenStreetMap)**

  * Displaying OpenStreetMap data using the Leaflet library in a React
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
   PORT=5001
   MONGODB_URI=mongodb+srv://sonikakannan66:rw8pOgyVGiMnqzQf@cluster0.0oh2xct.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   JWT_SECRET=randomsecret
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
   VITE_API_URL= https://chargerhub-backend.onrender.com
   ```

4. Run the frontend:

   ```bash
   npm run dev
   ```

---

## 🌍 Deployment

* **Frontend Deployed On**: \[Render]
  🔗 [https://chargerhub-frontend.onrender.com)

* **Backend Deployed On**: \[Render]
  🔗 [https://chargerhub-backend.onrender.com)

* (Optional) ✅ **API Documentation**: Postman collection available in the `postman_collection.json`.

---

## 🗂️ Project Structure

```
/backend     # Express API
/frontend    # React UI
```

---
