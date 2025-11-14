import { useState } from "react";
import { Row, Col, Button, Container, Form } from "react-bootstrap";

function Task({ handleSubmit, task, setTask }) {
  return (
    <Container fluid className="bg-gradient py-5" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <Container className="py-4">
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6}>
            <div className="bg-white rounded-lg shadow-lg p-4 p-md-5" style={{ border: '3px solid #667eea' }}>
              <h1 className="text-center mb-4 text-primary fw-bold">Task Manager</h1>
              
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter Your Task"
                  onChange={(e) => setTask(e.target.value)}
                  value={task}
                  size="lg"
                  className="border-2"
                  style={{ borderColor: '#667eea' }}
                />
              </Form.Group>
              
              <Button
                variant="primary"
                onClick={() => {
                  handleSubmit(task);
                  setTask("");
                }}
                className="w-100 fw-bold"
                size="lg"
                style={{ backgroundColor: '#667eea', borderColor: '#667eea' }}
              >
                Submit the Task
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Task;