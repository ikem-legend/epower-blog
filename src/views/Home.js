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
      currPage: 1,
      currSlice: [0, 6],
      currentPagePosts: [],
      loading: true,
      prev: false,
      next: true
    };
  }

  componentDidMount() {
    fetch(`${baseUrl}?per_page=100`)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        // console.log(result.slice(0, 6));
        // console.log(result.slice(6, 12));
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
    const { posts, currSlice, currPage } = this.state;
    // console.log(posts.slice(0, 6));
    // this.setState({
    //   ...this.state,
    //   currentPagePosts: posts.slice(0, 6),
    //   prev: false,
    //   next: true
    // });
    currSlice[0] -= 6;
    currSlice[1] -= 6;
    console.log(currSlice);
    console.log(posts.slice(...currSlice));
    // Disable previous button if no content left by checking if the previous page has an index of 0
    if (currSlice[0] === 0) {
      this.setState({
        ...this.state,
        currPage: currPage - 1,
        currSlice,
        currentPagePosts: posts.slice(...currSlice),
        prev: false,
        next: true
      });
    } else {
      this.setState({
        ...this.state,
        currPage: currPage - 1,
        currSlice,
        currentPagePosts: posts.slice(...currSlice),
        prev: true,
        next: true
      });
    }
  };

  nextPosts = () => {
    const { posts, currSlice, currPage } = this.state;
    // console.log(posts.slice(4));
    currSlice[0] += 6;
    currSlice[1] += 6;
    console.log(currSlice);
    console.log(posts.slice(...currSlice));
    // Disable next button if no content left by checking if at most 7 items are in the next page
    // We choose 7 because the plast page can have 6 elements
    // if (posts.slice(currSlice[0], currSlice[1]+1).length < 7) {
    if (posts.length > currSlice[0] && posts.length <= currSlice[1]) {
      this.setState({
        ...this.state,
        currPage: currPage + 1,
        currSlice,
        currentPagePosts: posts.slice(...currSlice),
        prev: true,
        next: false
      });
    } else {
      this.setState({
        ...this.state,
        currPage: currPage + 1,
        currSlice,
        currentPagePosts: posts.slice(...currSlice),
        prev: true,
        next: true
      });
    }
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
                  style={{ height: "100px", marginTop: "20px" }}
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
