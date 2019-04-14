import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default class AddIssueModal extends Component {
  render() {
    return (
      <Modal
        show={this.props.show}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            New Issue
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="row">
          <Form.Group
            controlId="textarea.addIssue"
            className="col-md-8 col-sm-12"
          >
            <Form.Control as="textarea" rows="5" placeholder="your new issue" />
          </Form.Group>
          <div className="col-md-4 col-sm-12">
            <ul className="list-unstyled">
              <li>Assignee</li>
              <li className="text-muted">Noone yet</li>
            </ul>
            <ul className="list-unstyled">
              <li>Label</li>
              <li>
                <input
                  className="form-control"
                  type="text"
                  placeholder="label-1, label-2..."
                />
              </li>
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" onClick={this.props.handleSubmit}>
            Submit
          </Button>
          <Button onClick={this.props.handleHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
