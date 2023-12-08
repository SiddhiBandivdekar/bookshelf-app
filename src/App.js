import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./components/Admin";
import Home from "./components/Home";
import ShowAdmin from "./components/ShowAdmin";
import ShowBook from "./components/ShowBook";
import QRScanner from "./components/QRScanner";

const AddWrapper = styled.div`
  padding: 20px;
`;

const App = () => {
  const [book, setBook] = useState([]);

  const addBook = (newBook) => {
    setBook((prevBook) => [...prevBook, newBook]);
  };

  const removeBook = (isbn) => {
    setBook((prevBook) => prevBook.filter((book) => book.isbn !== isbn));
  };

  const editBook = (isbn, updatedDetails) => {
    setBook((prevBooks) =>
      prevBooks.map((book) =>
        book.isbn === isbn ? { ...book, ...updatedDetails } : book
      )
    );
  };

  return (
    <>
      <Router>
        <AddWrapper>
          <Routes>
            <Route path="/" element={<Home books={book} />} />
            <Route path="/admin" element={<Admin addBook={addBook} />} />
            <Route
              path="/show-admin"
              element={
                <ShowAdmin
                  books={book}
                  removeBook={removeBook}
                  editBook={editBook}
                />
              }
            />
            <Route
              path="/show-book/:isbn"
              element={<ShowBook books={book} />}
            />
            <Route path="/qr-scanner" element={<QRScanner />} />
          </Routes>
        </AddWrapper>
      </Router>
    </>
  );
};

export default App;
