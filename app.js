const express = require("express");
const databaseConnection = require("./dbconfig");
const Book = require("./model/bookModel");
const app = express();

app.use(express.json());

const PORT = 8080;

//database connection
databaseConnection();

app.get("/", (req, res) => {
  res.send("Hello World !!");
});

app.post("/book", async (req, res) => {
  const {
    bookName,
    bookPrice,
    isbnNumber,
    authorName,
    publishedAt,
    publication,
  } = req.body;
  const data = await Book.create({
    bookName,
    bookPrice,
    authorName,
    publishedAt,
    isbnNumber,
    publication,
  });
  res.status(200).json({
    message: "Book created successfully !!",
    data: data,
  });
});

app.get("/book", async (req, res) => {
  const data = await Book.find();
  res.status(200).json({
    message: "Book Fetched Successfully !!",
    data: data,
  });
});

app.get("/book/:id", async (req, res) => {
  const { id } = req.params;
  const data = await Book.findById(id);
  res.status(200).json({
    message: "Single Book Fetched successfully !!",
    data: data,
  });
});

app.delete("/book/:id", async (req, res) => {
  const { id } = req.params;
  const data = await Book.findByIdAndDelete(id);
  res.status(200).json({
    message: "Book Deleted Successfully !!!",
    data: data,
  });
});

app.patch("/book/:id", async (req, res) => {
  const { id } = req.params;
  const {
    bookName,
    bookPrice,
    isbnNumber,
    authorName,
    publishedAt,
    publication,
  } = req.body;
  const data = await Book.findByIdAndUpdate(id, {
    bookName,
    bookPrice,
    isbnNumber,
    authorName,
    publishedAt,
    publication,
  });
  res.status(200).json({
    message: "Book Updated Successfully !!",
    data: data,
  });
});

app.listen(PORT || 5000, () => {
  console.log(`app running in ${PORT}`);
});
