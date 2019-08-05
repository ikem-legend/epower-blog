import React from "react";
import { Row, Col } from "reactstrap";

export default function Header() {
  return (
    <header className="container-fluid">
      <Row className="row h-100 justify-content-center align-items-center">
        <Col md={12}>
          <h1 className="float-right">Epower Blog</h1>
        </Col>
      </Row>
    </header>
  );
}
