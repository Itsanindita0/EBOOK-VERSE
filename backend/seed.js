const mongoose = require('mongoose');
require('dotenv').config();
const Book = require('./models/Book');

// Empty books array - you will add books manually
// See MANUAL_PDF_SETUP.md for instructions on how to add books
const books = [
  {
    title: "Gitanjali",
    author: "Rabindranath Tagore",
    year: "1910",
    category: "Poetry",
    description: "A collection of 103 poems that earned Tagore the Nobel Prize in Literature, expressing spiritual devotion and the relationship between the human soul and the divine.",
    pdfUrl: "/pdfs/Gitanjali.pdf"
  },
  {
    title: "Dracula",
    author: "Bram Stoker",
    year: "1897",
    category: "Classic Fiction",
    description: "A gothic horror tale of vampires and the fight against Count Dracula, one of the most famous vampire stories ever written.",
    pdfUrl: "/pdfs/dracula.pdf"
  },
  {
    title: "Leaves of Grass",
    author: "Walt Whitman",
    year: "1855",
    category: "Poetry",
    description: "A groundbreaking collection celebrating democracy, nature, love, and friendship. One of the most influential works in American poetry.",
    pdfUrl: "/pdfs/leaves-of-grass.pdf"
  },
  {
    title: "An Autobiography",
    author: "Mahatma Gandhi",
    year: "1927",
    category: "Biography/Autobiography",
    description: "The story of my experiments with truth - Gandhi's autobiography detailing his life, philosophy, and the development of his principles of nonviolence.",
    pdfUrl: "/pdfs/An-Autobiography.pdf"
  },
  {
    title: "The Complete Mahabharata",
    author: "Vyasa",
    year: "Ancient",
    category: "Classic Fiction",
    description: "One of the two major Sanskrit epics of ancient India, containing over 100,000 verses. The great Indian epic of war, duty, and dharma.",
    pdfUrl: "/pdfs/The Complete Mahabharata .pdf"
  },
  {
    title: "Meghaduta (The Cloud Messenger)",
    author: "Kalidasa",
    year: "c. 4th-5th century CE",
    category: "Poetry",
    description: "A beautiful Sanskrit poem by Kalidasa, one of the greatest Sanskrit poets. A yaksha sends a message to his beloved through a cloud.",
    pdfUrl: "/pdfs/An_English_Translation_of_Kalidasa_s_Meg (1).pdf"
  },
  {
    title: "Kabuliwala",
    author: "Rabindranath Tagore",
    year: "1892",
    category: "Classic Fiction",
    description: "A touching short story by Tagore about the friendship between a young girl and an Afghan fruit seller, exploring themes of love, separation, and human connection.",
    pdfUrl: "/pdfs/Kabuliwala (English Translation) by Mohammad Qyaum.pdf"
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/booklibrary', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');

    // Clear existing books
    await Book.deleteMany({});
    console.log('Cleared existing books');

    // Insert new books
    await Book.insertMany(books);
    console.log(`Seeded ${books.length} books successfully`);

    mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    mongoose.connection.close();
    process.exit(1);
  }
}

seedDatabase();

