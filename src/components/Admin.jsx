import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Admin = ({ addBook }) => {
  const navigate = useNavigate();

  const [book, setBook] = useState({
    name: "",
    isbn: "",
    category: "",
    row: "",
    count: 0,
    cost: 0,
    availability: true,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({ ...prevBook, [name]: value }));
  };

  const handleBook = () => {
    addBook(book);
    setBook({
      name: "",
      isbn: "",
      category: "",
      row: "",
      count: 0,
      cost: 0,
      availability: true,
    });

    navigate("/");
  };

  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter book name"
            name="name"
            value={book.name}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>ISBN</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter ISBN"
            name="isbn"
            value={book.isbn}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter category"
            name="category"
            value={book.category}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Row</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter row"
            name="row"
            value={book.row}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Count</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Count"
            name="count"
            value={book.count}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Cost</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter cost"
            name="cost"
            value={book.cost}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="Availability"
            checked={book.availability}
            onChange={() =>
              setBook((prevBook) => ({
                ...prevBook,
                availability: !prevBook.availability,
              }))
            }
          />
        </Form.Group>

        <Button variant="primary" onClick={handleBook}>
          Add book
        </Button>
      </Form>
    </>
  );
};

export default Admin;
