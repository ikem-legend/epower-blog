import React from "react";
import { Row, Col } from "reactstrap";

export default function Header() {
  return (
    <header className="container-fluid">
      <Row>
        <Col md={12}>
          <h1>Epower Blog</h1>
        </Col>
      </Row>
    </header>
  )
}