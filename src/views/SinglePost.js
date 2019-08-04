import React, { Component } from "react";
import SinglePostDetails from "../components/SinglePostDetails";
import SinglePostHeader from "../components/SinglePostHeader";
import Footer from "../components/Footer";
import { Row, Col } from "reactstrap";
import Loader from "../assets/img/loader.gif";
import { baseUrl } from "../constants";

class SinglePost extends Component {
  constructor() {
    super();
    this.state = {
      post: [],
      loading: true
    };
  }

  componentDidMount() {
    const { pathname } = this.props.location;
    // console.log(this.props.location)
    const postId = pathname.split("/")[2];
    console.log(postId);
    fetch(`${baseUrl}?include[]=${postId}`)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        this.setState({
          post: result,
          loading: false
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          ...this.state,
          loading: false
        });
      });
  }

  render() {
    const { post, loading } = this.state;
    const postList = post.map(singlePost => (
      <SinglePostDetails key={singlePost.id} post={singlePost} />
    ));
    console.log(postList);
    return (
      <div className="wrapper">
        <div className="container m-b-3">
          <Row>
            <Col md={12} sm={12}>
              {loading ? (
                <img
                  src={Loader}
                  className="img-responsive mx-auto d-block"
                  style={{ height: "100px" }}
                  alt="loading gif"
                />
              ) : null}
              {postList || null}
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SinglePost;
