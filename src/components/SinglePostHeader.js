import React from "react";
import { Row, Col } from "reactstrap";

export default function Header({ headerText }) {
  return (
    <header className="container-fluid">
      <Row>
        <Col md={12}>
          <h1>{headerText}</h1>
        </Col>
      </Row>
    </header>
  );
}
