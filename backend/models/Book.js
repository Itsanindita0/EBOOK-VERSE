const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: String,
    required: true,
    trim: true
  },
  year: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Classic Fiction', 'Philosophy', 'Science', 'History', 'Self-Help', 'Biography/Autobiography', 'Poetry', "Children's Literature"]
  },
  description: {
    type: String,
    required: true
  },
  pdfUrl: {
    type: String,
    required: true
  },
  coverImage: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);

