import React from "react";
import { Row, Col } from "reactstrap";

export default function Header({ headerText, headerDate }) {
  return (
    <header className="container-fluid">
      <Row className="row h-100 justify-content-center align-items-center text-center">
        <Col md={12}>
          <h1>{headerText}</h1>
          <h3>Published on {headerDate}</h3>
        </Col>
      </Row>
    </header>
  );
}
