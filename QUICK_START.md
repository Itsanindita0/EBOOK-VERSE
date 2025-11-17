# Quick Start Guide

## Prerequisites
- Node.js (v14+) installed
- MongoDB installed and running locally (or use MongoDB Atlas)

## Step-by-Step Setup

### 1. Install Backend Dependencies
```bash
cd backend
npm install
```

### 2. Setup MongoDB
Make sure MongoDB is running:
- **Windows**: MongoDB should be running as a service
- **Mac/Linux**: Run `mongod` in a terminal
- **Alternative**: Use MongoDB Atlas (update `.env` with your connection string)

### 3. Seed the Database
```bash
npm run seed
```
This will populate the database with 20 classic books.

### 4. Start Backend Server
```bash
npm start
# or for development:
npm run dev
```
Backend runs on `http://localhost:5000`

### 5. Install Frontend Dependencies
Open a new terminal:
```bash
cd frontend
npm install
```

### 6. Start Frontend Server
```bash
npm start
```
Frontend runs on `http://localhost:3000`

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running: `mongod --version`
- Check if port 27017 is available
- Update `.env` file with correct MongoDB URI

### Port Already in Use
- Backend: Change `PORT` in `backend/.env`
- Frontend: React will prompt to use a different port

### Books Not Loading
- Ensure backend is running
- Check browser console for errors
- Verify MongoDB connection and seeded data

## Features to Try

1. **Search**: Type in the search bar to find books by title, author, or description
2. **Categories**: Click category buttons to filter books
3. **Read Books**: Click "Read PDF" on any book card to open the PDF in a new tab

Enjoy exploring the futuristic book library! 🚀📚

