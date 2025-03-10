# Visa Navigator

## Purpose

Visa Navigator is a user-friendly visa portal designed to simplify the process of checking visa requirements, applying for visas online, and tracking applications. The platform provides authentication, role-based access, and administrative controls for managing visa information.

## Live URL

[Live Demo](https://visa-navigator-d3c13.web.app/)

---

## Key Features

- **User Authentication:** Create an account and log in securely.
- **Google Authentication:** Login with Google popup.
- **Role-Based Access:** Different routes have unique designs based on roles.
- **Visa Management:**
  - Add and delete visa information.
  - Update visa details.
- **Private Routes:** Certain pages are restricted to authenticated users.
- **Responsive Design:** Works seamlessly on mobile, PC, and tablets.

---

## Tech Stack

### Frontend

- **React.js** (UI Library)
- **TailwindCSS** (Styling)
- **DaisyUI** (UI Components)
- **Axios** (API Requests)
- **Firebase** (Authentication & Hosting)
- **React Router** (Navigation)
- **Prop-Types** (Type Checking)
- **React-Helmet-Async** (SEO Optimization)
- **SweetAlert2** (Alerts & Notifications)
- **Swiper** (Image Sliders)

### Backend

- **Express.js** (Backend Framework)
- **MongoDB** (Database)

---

## Installation & Setup (Local Testing)

### Prerequisites

- Node.js (Latest Version Recommended)
- MongoDB (Local or Cloud Instance)

### Clone Repository

```sh
  git clone https://github.com/mdtayef001/VISA-NAVIGATOR.git
  cd VISA-NAVIGATOR
```

### Frontend Setup

1. Install dependencies:
   ```sh
   cd client
   npm install
   ```
2. Create a `.env` file and add the required environment variables:
   ```env
   VITE_API_URL=http://localhost:5000
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   ```
3. Run the frontend:
   ```sh
   npm run dev
   ```

### Backend Setup

1. Navigate to the backend folder:
   ```sh
   cd server
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   DB_USER=your_mongodb_user_name
   DB_PASS=your_mongodb_password
   ```
4. Start the backend server:
   ```sh
   npm run dev
   ```
