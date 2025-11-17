# 🚀 How to Open the Book Library App

## Quick Start (Copy & Paste These Commands)

### **Terminal 1 - Backend Setup**

```powershell
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Seed the database with books
npm run seed

# Start the backend server
npm start
```

**Keep this terminal open!** You should see: `Server running on port 5000`

---

### **Terminal 2 - Frontend Setup**

Open a **NEW** terminal window:

```powershell
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Start the frontend server
npm start
```

**Keep this terminal open!** Your browser should automatically open to `http://localhost:3000`

---

## ✅ What You Should See

1. **Backend Terminal**: Shows "MongoDB Connected" and "Server running on port 5000"
2. **Frontend Terminal**: Shows "Compiled successfully!" and opens your browser
3. **Browser**: Opens to a futuristic book library with animated stars and neon effects

---

## ⚠️ Important Notes

### Before Starting:
- **Node.js** must be installed (check with: `node --version`)
- **MongoDB** must be running (check with: `mongod --version`)

### If MongoDB is NOT installed:
You have two options:

**Option 1: Install MongoDB locally**
- Download from: https://www.mongodb.com/try/download/community
- Install and start the MongoDB service

**Option 2: Use MongoDB Atlas (Cloud - Free)**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account and cluster
3. Get your connection string
4. Update `backend/.env` file:
   ```
   MONGODB_URI=your_mongodb_atlas_connection_string_here
   ```

---

## 🎯 Once the App is Open

1. **Search**: Type in the search bar to find books
2. **Filter**: Click category buttons (Classic Fiction, Philosophy, etc.)
3. **Read**: Click "Read PDF" on any book to open it

---

## 🆘 Troubleshooting

### "npm: command not found"
- Install Node.js from: https://nodejs.org/

### "MongoDB connection error"
- Make sure MongoDB is running
- Or use MongoDB Atlas (cloud) and update `.env` file

### "Port 5000 already in use"
- Change the port in `backend/.env` to something else like `PORT=5001`

### "Port 3000 already in use"
- React will ask if you want to use a different port - type `Y` and press Enter

---

## 📝 Summary

**You need 2 terminals running:**
1. **Terminal 1**: Backend server (`npm start` in backend folder)
2. **Terminal 2**: Frontend server (`npm start` in frontend folder)

**Then open:** `http://localhost:3000` in your browser

Enjoy your futuristic book library! 📚✨

