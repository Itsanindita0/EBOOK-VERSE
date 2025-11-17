# Book Library - Futuristic Web Application

A modern, futuristic book library web application built with the MERN stack (MongoDB, Express, React, Node.js). Browse, search, and read classic books from various categories.

## Features

- 🔍 **Advanced Search**: Search books by title, author, or description
- 📚 **Category Filtering**: Filter books by categories (Classic Fiction, Philosophy, Science, History, Self-Help, Biography/Autobiography, Poetry, Children's Literature)
- 🎨 **Futuristic UI**: Modern, animated interface with neon effects and glassmorphism
- 📖 **PDF Access**: Direct links to read books online from Project Gutenberg and Internet Archive
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## Tech Stack

- **Frontend**: React 18, CSS3 (with animations)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Fonts**: Orbitron (futuristic), Rajdhani (clean)

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file (already created) or update it with your MongoDB connection string:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/booklibrary
```

4. Make sure MongoDB is running on your system.

5. Seed the database with books:
```bash
npm run seed
```

6. Start the backend server:
```bash
npm start
# or for development with auto-reload:
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## Project Structure

```
book-library/
├── backend/
│   ├── models/
│   │   └── Book.js          # MongoDB book model
│   ├── routes/
│   │   └── books.js         # API routes for books
│   ├── server.js            # Express server setup
│   ├── seed.js              # Database seeding script
│   ├── package.json
│   └── .env                 # Environment variables
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── BookCard.js
│   │   │   ├── BookCard.css
│   │   │   ├── SearchBar.js
│   │   │   ├── SearchBar.css
│   │   │   ├── CategoryFilter.js
│   │   │   └── CategoryFilter.css
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
└── README.md
```

## API Endpoints

- `GET /api/books` - Get all books (supports `?category=` and `?search=` query parameters)
- `GET /api/books/:id` - Get a specific book by ID
- `GET /api/books/categories/list` - Get all available categories

## Books Included

The application comes pre-loaded with 20 classic books from the public domain, including:

- **Classic Fiction**: Pride and Prejudice, Sherlock Holmes, Dracula
- **Philosophy**: The Republic, Meditations, Thus Spoke Zarathustra
- **Science**: On the Origin of Species, The Outline of Science, The Double Helix
- **History**: The Decline and Fall of the Roman Empire, A People's History, The Prince
- **Self-Help**: As a Man Thinketh, The Science of Getting Rich, Think and Grow Rich
- **Biography**: Benjamin Franklin's Autobiography, Frederick Douglass Narrative
- **Poetry**: Leaves of Grass, The Divine Comedy
- **Children's Literature**: Alice's Adventures in Wonderland

## Usage

1. Start both backend and frontend servers
2. Open your browser and navigate to `http://localhost:3000`
3. Use the search bar to find books by title, author, or description
4. Click on category buttons to filter books
5. Click "Read PDF" on any book card to open the book in a new tab

## Customization

### Adding More Books

Edit `backend/seed.js` to add more books to the seed data, then run:
```bash
npm run seed
```

### Styling

The futuristic theme can be customized by modifying:
- `frontend/src/App.css` - Main app styles and animations
- `frontend/src/components/*.css` - Component-specific styles
- Color schemes can be adjusted in the CSS variables

## License

This project is open source and available for educational purposes.

## Notes

- All PDF links point to public domain sources (Project Gutenberg, Internet Archive)
- Some links may require free registration (e.g., Archive.org)
- The application uses local MongoDB by default - update `.env` for cloud databases

