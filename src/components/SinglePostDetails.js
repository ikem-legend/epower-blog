import React, { Fragment } from "react";

const SinglePostDetails = ({ post }) => {
  // console.log(props)
  return (
    <Fragment>
      <div className="post m-t-5">
        <img src={post.featured_image} alt="" className="img-fluid" />
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </div>
    </Fragment>
  );
};

export default SinglePostDetails;
