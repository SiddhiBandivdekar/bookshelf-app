import React, { useState } from "react";
import { Button, Form, Table, Modal } from "react-bootstrap";

const ShowAdmin = ({ books, removeBook, editBook }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const [updatedName, setUpdatedName] = useState("");
  const [updatedISBN, setUpdatedISBN] = useState(selectedBook?.isbn || "");
  const [updatedCategory, setUpdatedCategory] = useState(
    selectedBook?.category || ""
  );
  const [updatedRow, setUpdatedRow] = useState(selectedBook?.row || "");
  const [updatedCount, setUpdatedCount] = useState(selectedBook?.count || 0);
  const [updatedCost, setUpdatedCost] = useState(selectedBook?.cost || 0);
  const [updatedAvailability, setUpdatedAvailability] = useState(
    selectedBook?.availability || false
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleRemoveBook = (isbn) => {
    removeBook(isbn);
  };

  const handleShowEditModal = (book) => {
    setSelectedBook(book);

    setUpdatedName(book.name);
    setUpdatedISBN(book.isbn);
    setUpdatedCategory(book.category);
    setUpdatedRow(book.row);
    setUpdatedCount(book.count);
    setUpdatedCost(book.cost);
    setUpdatedAvailability(book.availability);

    setShowEditModal(true);
  };

  const handleEditBook = () => {
    const updatedBookDetails = {
      name: updatedName,
      isbn: updatedISBN,
      category: updatedCategory,
      row: updatedRow,
      count: updatedCount,
      cost: updatedCost,
      availability: updatedAvailability,
    };

    editBook(selectedBook.isbn, updatedBookDetails);

    setShowEditModal(false);
  };

  const handleCloseEditModal = () => {
    setSelectedBook(null);
    setUpdatedName("");
    setUpdatedISBN("");
    setUpdatedCategory("");
    setUpdatedRow("");
    setUpdatedCount(0);
    setUpdatedCost(0);
    setUpdatedAvailability(false);
    setShowEditModal(false);
  };

  const filteredBooks = books.filter(
    (book) =>
      book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.isbn.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div>
        <h2>Show Admin</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Search by ISBN or Book</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter ISBN or Book Name"
              value={searchTerm}
              onChange={handleSearch}
            />
          </Form.Group>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Book Name</th>
              <th>ISBN</th>
              <th>Category</th>
              <th>Row</th>
              <th>Count</th>
              <th>Cost</th>
              <th>Availability</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map((book, index) => (
              <tr key={index}>
                <td>{book.name}</td>
                <td>{book.isbn}</td>
                <td>{book.category}</td>
                <td>{book.row}</td>
                <td>{book.count}</td>
                <td>{book.cost}</td>
                <td>{book.availability ? "Available" : "Not Available"}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleRemoveBook(book.isbn)}
                  >
                    Remove
                  </Button>{" "}
                  <Button
                    variant="info"
                    onClick={() => handleShowEditModal(book)}
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Book Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter book name"
                value={selectedBook?.name || ""}
                onChange={(e) => setUpdatedName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>ISBN</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter ISBN"
                value={updatedISBN}
                onChange={(e) => setUpdatedISBN(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter category"
                value={updatedCategory}
                onChange={(e) => setUpdatedCategory(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Row</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter row"
                value={updatedRow}
                onChange={(e) => setUpdatedRow(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Count</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter count"
                value={updatedCount}
                onChange={(e) => setUpdatedCount(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Cost</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter cost"
                value={updatedCost}
                onChange={(e) => setUpdatedCost(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Availability"
                checked={updatedAvailability}
                onChange={() => setUpdatedAvailability(!updatedAvailability)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditBook}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ShowAdmin;
