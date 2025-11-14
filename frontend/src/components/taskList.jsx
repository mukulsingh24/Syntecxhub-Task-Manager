import React from "react";
import { Row, Col, Button, Container, ListGroup, Card } from "react-bootstrap";

function List({ taskList, handleEdit, handleDelete }) {
  return (
    <Container fluid className="bg-light py-5" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <Container className="py-4">
        <Row className="justify-content-center mb-4">
          <Col xs={12} sm={10} md={8} lg={6}>
            <h1 className="text-center text-primary fw-bold mb-4">Tasks List</h1>
          </Col>
        </Row>
        
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6}>
            {taskList.length > 0 ? (
              <Card className="shadow-lg" style={{ border: '3px solid #667eea' }}>
                <Card.Body className="p-0">
                  <ListGroup variant="flush">
                    {taskList.map((item, index) => (
                      <ListGroup.Item
                        key={index}
                        className="d-flex justify-content-between align-items-center flex-wrap gap-2 p-3"
                        style={{ backgroundColor: '#fff', borderBottom: '2px solid #e0e0e0' }}
                      >
                        <span className="text-start flex-grow-1 fw-500 text-dark" style={{ wordBreak: 'break-word' }}>
                          {item}
                        </span>
                        <div className="d-flex gap-2 flex-wrap">
                          <Button
                            variant="warning"
                            size="sm"
                            onClick={() => handleEdit(index)}
                            className="fw-bold"
                          >
                            Edit
                          </Button>
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => handleDelete(index)}
                            className="fw-bold"
                          >
                            Delete
                          </Button>
                        </div>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>
            ) : (
              <Card className="shadow-lg text-center p-4" style={{ border: '3px solid #667eea', backgroundColor: '#f9f9f9' }}>
                <h5 className="text-muted">No tasks yet. Add one to get started!</h5>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default List;