import React, { Fragment } from "react";
import { Col, Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";
import { Link } from "react-router-dom";

const HomeItems = ({ post }) => (
  <Fragment>
    <Col md={6} sm={12} className="m-t-5 m-b-3">
      <Link to={`/posts/${post.id}/${post.slug}`}>
        <Card>
          <CardImg top width="100%" src={post.featured_image} className="img-responsive" />
          <CardBody>
            <CardTitle>{post.title.rendered}</CardTitle>
            <CardText>{post.excerpt.rendered}</CardText>
          </CardBody>
        </Card>
      </Link>
    </Col>
  </Fragment>
)

export default HomeItems;