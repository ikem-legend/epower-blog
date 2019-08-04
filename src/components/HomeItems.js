import React, { Fragment } from "react";
import { Col, Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";
import PostImage from "../assets/img/epower-card.png";

const HomeItems = ({ post }) => (
  <Fragment>
    <Col md={6} sm={12} className="m-t-5 m-b-3">
      <Card>
        <CardImg top width="100%" src={PostImage} />
        <CardBody>
          <CardTitle>{post.title.rendered}</CardTitle>
          <CardText>{post.excerpt.rendered}</CardText>
        </CardBody>
      </Card>
    </Col>
  </Fragment>
)

export default HomeItems;