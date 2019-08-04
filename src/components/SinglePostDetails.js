import React, { Fragment } from "react";
import { Col, Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";

const SinglePostDetails = ({ post }) => (
  <Fragment>
    <div>
      <p>{post.title.rendered}</p>
      <img src={post.featured_image} alt="" />
      {post.content.rendered}
    </div>
  </Fragment>
);

export default SinglePostDetails;
