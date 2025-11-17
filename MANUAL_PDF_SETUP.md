# Manual PDF Setup Guide

## How to Add Books Manually

### Step 1: Add Your PDF Files

1. Place your PDF files in: `backend/public/pdfs/`
2. Use simple, lowercase filenames with hyphens (e.g., `pride-and-prejudice.pdf`)
3. Make sure the PDF files are valid and can be opened

### Step 2: Add Book Information

1. Open `backend/seed.js`
2. Add your book information in the `books` array using this format:

```javascript
{
  title: "Pride and Prejudice",
  author: "Jane Austen",
  year: "1813",
  category: "Classic Fiction", // Choose from: "Classic Fiction", "Philosophy", "Science", "History", "Self-Help", "Biography/Autobiography", "Poetry", "Children's Literature"
  description: "A witty exploration of love, class, and society in Regency England.",
  pdfUrl: "/pdfs/pride-and-prejudice.pdf" // Must match your PDF filename
}
```

### Step 3: Update the Database

After adding books to `seed.js`, run:

```powershell
cd backend
npm run seed
```

This will:
- Clear old books
- Add your new books to the database

### Step 4: Restart Your Server

```powershell
npm start
```

## Example: Adding Multiple Books

```javascript
const books = [
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: "1813",
    category: "Classic Fiction",
    description: "A witty exploration of love, class, and society in Regency England.",
    pdfUrl: "/pdfs/pride-and-prejudice.pdf"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: "1925",
    category: "Classic Fiction",
    description: "A tale of decadence and excess in Jazz Age America.",
    pdfUrl: "/pdfs/great-gatsby.pdf"
  },
  {
    title: "The Art of War",
    author: "Sun Tzu",
    year: "c. 500 BCE",
    category: "History",
    description: "An ancient Chinese military treatise on strategy and tactics.",
    pdfUrl: "/pdfs/art-of-war.pdf"
  }
];
```

## Important Notes

- **PDF Filename**: The `pdfUrl` must exactly match your PDF filename in `backend/public/pdfs/`
- **Categories**: Use exactly one of these categories:
  - "Classic Fiction"
  - "Philosophy"
  - "Science"
  - "History"
  - "Self-Help"
  - "Biography/Autobiography"
  - "Poetry"
  - "Children's Literature"

## File Structure

```
backend/
  ├── public/
  │   └── pdfs/
  │       ├── pride-and-prejudice.pdf
  │       ├── great-gatsby.pdf
  │       └── art-of-war.pdf
  └── seed.js (contains book information)
```

## Quick Checklist

- [ ] PDF files placed in `backend/public/pdfs/`
- [ ] Book information added to `backend/seed.js`
- [ ] `pdfUrl` matches PDF filename
- [ ] Category is one of the valid options
- [ ] Run `npm run seed` to update database
- [ ] Restart backend server

## Troubleshooting

**PDF not showing?**
- Check that PDF file exists in `backend/public/pdfs/`
- Verify `pdfUrl` in seed.js matches the filename exactly
- Make sure backend server is running
- Check browser console for errors

**Book not appearing?**
- Make sure you ran `npm run seed` after adding the book
- Check that all required fields are filled in seed.js
- Verify the category name is spelled correctly

