const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
require('dotenv').config();
const Book = require('./models/Book');

// Book information - Fill this in with your book details
const newBook = {
  title: process.argv[2] || "Book Title",
  author: process.argv[3] || "Author Name",
  year: process.argv[4] || "Year",
  category: process.argv[5] || "Classic Fiction",
  description: process.argv[6] || "Book description",
  pdfFilename: process.argv[7] || "book.pdf" // Just the filename, not the full path
};

// Validate category
const validCategories = [
  'Classic Fiction',
  'Philosophy',
  'Science',
  'History',
  'Self-Help',
  'Biography/Autobiography',
  'Poetry',
  "Children's Literature"
];

if (!validCategories.includes(newBook.category)) {
  console.error('Invalid category. Use one of:', validCategories.join(', '));
  process.exit(1);
}

// Check if PDF exists
const pdfPath = path.join(__dirname, 'public', 'pdfs', newBook.pdfFilename);
if (!fs.existsSync(pdfPath)) {
  console.error(`PDF file not found: ${pdfPath}`);
  console.error('Please make sure the PDF file is in backend/public/pdfs/');
  process.exit(1);
}

// Add to database
async function addBook() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/booklibrary', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');

    const book = new Book({
      title: newBook.title,
      author: newBook.author,
      year: newBook.year,
      category: newBook.category,
      description: newBook.description,
      pdfUrl: `/pdfs/${newBook.pdfFilename}`
    });

    await book.save();
    console.log('✓ Book added successfully!');
    console.log(`  Title: ${newBook.title}`);
    console.log(`  Author: ${newBook.author}`);
    console.log(`  PDF: ${newBook.pdfFilename}`);

    mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('Error adding book:', error.message);
    mongoose.connection.close();
    process.exit(1);
  }
}

addBook();

