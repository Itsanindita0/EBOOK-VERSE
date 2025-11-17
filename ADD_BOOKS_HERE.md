# Add Your Books Here

## Method 1: Tell me the book details and I'll add them

Just tell me:
1. **Book Title**
2. **Author Name**
3. **Year Published**
4. **Category** (Classic Fiction, Philosophy, Science, History, Self-Help, Biography/Autobiography, Poetry, or Children's Literature)
5. **Description** (what the book is about)
6. **PDF Filename** (the name of your PDF file in backend/public/pdfs/)

Example:
```
Title: Pride and Prejudice
Author: Jane Austen
Year: 1813
Category: Classic Fiction
Description: A witty exploration of love, class, and society in Regency England.
PDF: pride-and-prejudice.pdf
```

## Method 2: Use the command line script

After placing your PDF in `backend/public/pdfs/`, run:

```powershell
cd backend
node addBook.js "Book Title" "Author Name" "Year" "Category" "Description" "filename.pdf"
```

Example:
```powershell
node addBook.js "Pride and Prejudice" "Jane Austen" "1813" "Classic Fiction" "A witty exploration of love, class, and society" "pride-and-prejudice.pdf"
```

## Method 3: Edit seed.js directly

1. Place your PDF in `backend/public/pdfs/`
2. Open `backend/seed.js`
3. Add your book to the `books` array:

```javascript
const books = [
  {
    title: "Your Book Title",
    author: "Author Name",
    year: "Year",
    category: "Classic Fiction",
    description: "Book description here",
    pdfUrl: "/pdfs/your-filename.pdf"
  }
];
```

4. Run `npm run seed`

## Ready to add books?

Just tell me the details and I'll add them to your seed.js file!

