import React from "react";
import { Row, Col } from "reactstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

function ErrorPage() {
	return (
		<div>
			<Header />
      <div className="container">
        <Row>
          <Col>
		        <p className="text-center">404 Error!!! Page Not Found, please try again</p>
          </Col>
        </Row>
      </div>
			<Footer />
		</div>
	)
}

export default ErrorPage;