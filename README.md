# Develop state management workflows using Context API and Redux Toolkit

Overview
--------
This exercise walks you through building a small React application that combines:
- React Context API for authentication (AuthContext)
- Redux Toolkit for product/catalog and cart management (productsSlice, cartSlice)
The goals are:
a) Create a simple AuthContext that stores `isLoggedIn` and `userName` and updates on login/logout.
b) Create a `productsSlice` using Redux Toolkit to add, update, and remove products and connect it to a React component to show live updates.
c) Build a combined application where AuthContext stores current user, roles and token, while Redux Toolkit manages product catalog and cart. Show different product management options depending on role (admin vs normal user).

Prerequisites
-------------
- Node.js >= 14
- npm or yarn
- Basic React knowledge
- Optional: Redux DevTools and React DevTools extensions

Quick start
-----------
1. Clone the repo (or create a new React app with Vite / Create React App)
   - Using CRA: `npx create-react-app my-app`
   - Or Vite: `npm create vite@latest my-app --template react`
2. Install Redux Toolkit and React-Redux:
   ```bash
   npm install @reduxjs/toolkit react-redux
   ```
3. Start dev server:
   ```bash
   npm start
   ```
4. Open `http://localhost:3000` (or port used by your toolchain)

Project structure (recommended)
-------------------------------
- src/
  - main.jsx
  - App.jsx
  - context/
    - AuthContext.jsx
  - store/
    - index.js
    - productsSlice.js
  - components/
    - ProductsList.jsx
    - ProductForm.jsx
    - LoginForm.jsx

AuthContext: design & sample
----------------------------
Purpose: store authentication-related state (isLoggedIn, userName, role, token) and provide login/logout helpers.

LoginForm.jsx (simple) and usage examples are included in the `src/components` folder.

Redux Toolkit: productsSlice
---------------------------
Create a slice to manage products (list, add, update, remove). See `src/store/productsSlice.js`.

Combining Context API and Redux Toolkit
--------------------------------------
- AuthContext holds: current user name, role, token and login/logout helpers.
- Redux Toolkit stores application data: product catalog and cart.
- Use the role from AuthContext to conditionally render features:
  - Admin: can add/update/remove products.
  - User: can view products, add to cart, checkout.

Interactive exercises (what to implement and test)
--------------------------------------------------
1. Implement AuthContext
   - Task: Add AuthContext.jsx and provide `auth`, `login`, `logout`.
   - Test: Use LoginForm -> login as "admin" then check UI shows admin controls.

2. Implement productsSlice
   - Task: Add `productsSlice.js` with reducers `addProduct`, `updateProduct`, `removeProduct`.
   - Test: Dispatch `addProduct` from ProductForm and confirm ProductsList updates in real-time.

3. Role-based UI
   - Task: Guard admin-only actions by checking `auth.role === 'admin'`.
   - Test: Login as user vs admin and verify admin controls appear only for admin.

Verification checklist (how to verify success)
----------------------------------------------
- After login, `auth.isLoggedIn` should be true and `auth.userName` updated.
- Dispatching `addProduct` should add an item visible in ProductsList.
- Dispatching `updateProduct` should reflect changes immediately.
- Dispatching `removeProduct` should remove from the list.
- Admin-only buttons must be hidden for non-admins.
