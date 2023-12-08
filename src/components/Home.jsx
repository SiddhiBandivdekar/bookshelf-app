import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Home = ({ books }) => {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h2>Welcome to the Bookshelf app</h2>
        </Col>
      </Row>
      {books.length > 0 ? (
        <Row className="mt-3">
          <Col>
            <h3>Your Bookshelf</h3>
            <ul>
              {books.map((book, index) => (
                <li key={index}>{book.name}</li>
              ))}
            </ul>
          </Col>
        </Row>
      ) : (
        <Row className="mt-3">
          <Col>
            <p>No books available. Add books to your shelf!</p>
          </Col>
        </Row>
      )}

      {books.length > 0 && (
        <Row className="mt-4">
          <Col>
            <h3>View Details</h3>
            <Row>
              {books.map((book, index) => (
                <Col key={index} md={4} className="mb-4">
                
                  <Card style={{ width: "18rem" }} className="mb-4">
                    <Card.Body>
                      <Card.Title>{book.name}</Card.Title>

                      <Link
                        to={`/show-book/${book.isbn}`}
                        className="btn btn-primary"
                      >
                        View Details
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      )}

      <Row className="mt-4">
        <Col>
          <Link to="/admin">
            <Button variant="primary">Add new book</Button>
          </Link>
        </Col>
        <Col>
          <Link to="/show-admin">
            <Button variant="info">Show Admin</Button>
          </Link>
        </Col>
        <Col>
          <Link to="/qr-scanner">
            <Button variant="warning">QR Scanner</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
