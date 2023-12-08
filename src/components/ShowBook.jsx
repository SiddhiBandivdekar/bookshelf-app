import React from "react";
import { useParams } from "react-router-dom";

const ShowBook = ({ books }) => {
  const { isbn } = useParams();
  console.log("ISBN:", isbn);
  console.log("Books:", books);

  const book = books.find((book) => book.isbn === isbn);
  if (!book) {
    return <p>Book not found!</p>;
  }

  return (
    <>
      <div>
        <h2>Show Book</h2>
        <div>
          <strong>Book Name:</strong> {book.name}
        </div>
        <div>
          <strong>ISBN:</strong> {book.isbn}
        </div>
        <div>
          <strong>Category:</strong> {book.category}
        </div>
        <div>
          <strong>Row:</strong> {book.row}
        </div>
        <div>
          <strong>Count:</strong> {book.count}
        </div>
        <div>
          <strong>Cost:</strong> {book.cost}
        </div>
        <div>
          <strong>Availability:</strong>{" "}
          {book.availability ? "Available" : "Not Available"}
        </div>
      </div>
    </>
  );
};

export default ShowBook;
