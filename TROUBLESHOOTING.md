# Troubleshooting: Book Not Showing

## Quick Checklist

### 1. Is the PDF file in the correct location?
- ✅ PDF must be in: `backend/public/pdfs/Gitanjali.pdf`
- Check: Open the folder and verify the file exists

### 2. Did you run the seed command?
- ✅ Run: `cd backend` then `npm run seed`
- This adds the book to the database

### 3. Is the backend server running?
- ✅ Backend should be running on `http://localhost:5000`
- Check: Look for "Server running on port 5000" in terminal

### 4. Is the frontend server running?
- ✅ Frontend should be running on `http://localhost:3000`
- Check: Browser should show the app

### 5. Did you refresh the browser?
- ✅ Refresh the page (F5 or Ctrl+R)

## Step-by-Step Fix

1. **Place PDF file:**
   ```
   Copy Gitanjali.pdf to: backend/public/pdfs/Gitanjali.pdf
   ```

2. **Run seed command:**
   ```powershell
   cd backend
   npm run seed
   ```
   You should see: "Seeded 1 books successfully"

3. **Make sure backend is running:**
   ```powershell
   cd backend
   npm start
   ```

4. **Make sure frontend is running:**
   ```powershell
   cd frontend
   npm start
   ```

5. **Refresh browser** at http://localhost:3000

## Still Not Working?

- Check browser console (F12) for errors
- Check backend terminal for errors
- Verify MongoDB is running
- Make sure PDF filename matches exactly: `Gitanjali.pdf` (case-sensitive)

