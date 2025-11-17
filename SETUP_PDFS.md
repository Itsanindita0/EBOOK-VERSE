# PDF Setup Instructions

## Overview
The app now stores PDFs locally on your server instead of using external links. This ensures reliable access and faster loading.

## Step-by-Step Setup

### 1. Download the PDFs

Run this command in the backend directory:

```powershell
cd backend
npm run download-pdfs
```

This will:
- Create a `public/pdfs` directory
- Download all 20 PDF files from Project Gutenberg
- Save them locally in the backend

**Note**: The download may take a few minutes depending on your internet speed.

### 2. Verify PDFs are Downloaded

Check that the PDFs exist:
```powershell
dir backend\public\pdfs
```

You should see 20 PDF files.

### 3. Seed the Database

Update the database with the new local PDF paths:

```powershell
npm run seed
```

### 4. Start the Backend Server

```powershell
npm start
```

The backend will now serve PDFs from `http://localhost:5000/pdfs/`

### 5. Start the Frontend

In a new terminal:
```powershell
cd frontend
npm start
```

## How It Works

- **PDFs are stored locally** in `backend/public/pdfs/`
- **Backend serves PDFs** at `/pdfs/` endpoint
- **Frontend displays PDFs** in an iframe from the backend
- **No external dependencies** - all PDFs work offline once downloaded

## Troubleshooting

### PDFs Not Downloading
- Check your internet connection
- Some PDFs may fail - the script will continue with others
- Re-run `npm run download-pdfs` to retry failed downloads

### PDFs Not Displaying
- Make sure backend is running on port 5000
- Check browser console for errors
- Verify PDF files exist in `backend/public/pdfs/`

### Missing PDFs
If some PDFs fail to download, you can manually:
1. Download the PDF from Project Gutenberg
2. Save it to `backend/public/pdfs/` with the correct filename
3. The filename should match what's in `seed.js`

## PDF Files List

The following PDFs will be downloaded:
1. pride-and-prejudice.pdf
2. sherlock-holmes.pdf
3. dracula.pdf
4. frankenstein.pdf
5. moby-dick.pdf
6. republic.pdf
7. meditations.pdf
8. zarathustra.pdf
9. origin-of-species.pdf
10. prince.pdf
11. art-of-war.pdf
12. as-a-man-thinketh.pdf
13. science-of-getting-rich.pdf
14. benjamin-franklin.pdf
15. frederick-douglass.pdf
16. leaves-of-grass.pdf
17. divine-comedy.pdf
18. alice-wonderland.pdf
19. dorian-gray.pdf
20. great-gatsby.pdf

## Benefits

✅ **Reliable**: No broken external links
✅ **Fast**: PDFs load from local server
✅ **Offline**: Works without internet (after initial download)
✅ **Consistent**: All PDFs use the same source format
✅ **Secure**: No external dependencies or CORS issues

