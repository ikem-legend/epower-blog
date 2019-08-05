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
    // const { pathname } = this.props.location;
    // console.log(this.props.match.params)
    // const postId = pathname.split("/")[2];
    const postId = this.props.match.params.id;
    // console.log(postId);
    fetch(`${baseUrl}?include[]=${postId}`)
      .then(response => response.json())
      .then(result => {
        console.log(result[0]);
        this.setState({
          post: result[0],
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
    // const postList = post.map(singlePost => (
    //   <SinglePostDetails key={singlePost.id} post={singlePost} />
    // ));
    // console.log(post)
    const postList =
      post && Object.keys(post).length ? (
        <SinglePostDetails key={post.id} post={post} />
      ) : null;
    // console.log(postList)
    const postTitle = postList
      ? // console.log(postList.props.post.title.rendered)
        postList.props.post.title.rendered
      : null;
    const postDate = postList ? postList.props.post.post_date : null;
    return (
      <div className="wrapper">
        {<SinglePostHeader headerText={postTitle} headerDate={postDate} />}
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
