const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  bookName: {
    type: String,
    unique: true,
  },

  bookPrice: {
    type: String,
  },
  isbnNumber: {
    type: Number,
  },
  authorName: {
    type: String,
  },
  publication: {
    type: String,
  },
  publishedAt: {
    type: Date,
  },
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
