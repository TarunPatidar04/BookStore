import Book from "../model/book.model.js";

export const getBook = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ message: error.message });
  }
};
export const postBook = async (req, res) => {
  try {
    const body = req.body;
    const book = await Book.create(body);
    if (!book) {
      return res.status(400).json({ message: "Invalid book data" });
    }
    res.status(200).json(book);
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ message: error.message });
  }
};
