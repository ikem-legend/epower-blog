import React, { Component, Fragment } from "react";
import HomeItems from "../components/HomeItems";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { baseUrl } from "../constants";
import { Row, Col, Button } from "reactstrap";
import Loader from "../assets/img/loader.gif";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      currentPagePosts: [],
      loading: true,
      prev: false,
      next: true
    };
  }

  componentDidMount() {
    fetch(baseUrl)
      .then(response => response.json())
      .then(result => {
        console.log(result.slice(0, 6));
        this.setState({
          ...this.state,
          posts: result,
          currentPagePosts: result.slice(0, 6),
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

  prevPosts = () => {
    const { posts } = this.state;
    // console.log(posts.slice(0, 6));
    this.setState({
      ...this.state,
      currentPagePosts: posts.slice(0, 6),
      prev: false,
      next: true
    });
  };

  nextPosts = () => {
    const { posts } = this.state;
    // console.log(posts.slice(4));
    this.setState({
      ...this.state,
      currentPagePosts: posts.slice(4),
      prev: true,
      next: false
    });
  };

  render() {
    const { currentPagePosts, loading, prev, next } = this.state;
    const postList = currentPagePosts.map(post => (
      <HomeItems key={post.id} post={post} />
    ));
    return (
      <div className="wrapper">
        <Header />
        <div className="container m-b-3">
          <Row>
            {loading ? (
              <Col md={12} sm={12}>
                <img
                  src={Loader}
                  className="img-responsive mx-auto d-block"
                  style={{ height: "100px" }}
                  alt="loading gif"
                />
              </Col>
            ) : null}
            {postList || null}
            {postList && postList.length ? (
              <Fragment>
                <div className="offset-md-6 col-md-3">
                  <Button
                    color="primary"
                    size="lg"
                    className="navbtn"
                    onClick={this.prevPosts}
                    disabled={!prev}
                  >
                    Previous
                  </Button>{" "}
                </div>
                <div className="col-md-3">
                  <Button
                    color="primary"
                    size="lg"
                    className="navbtn"
                    onClick={this.nextPosts}
                    disabled={!next}
                  >
                    Next
                  </Button>
                </div>
              </Fragment>
            ) : null}
          </Row>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
