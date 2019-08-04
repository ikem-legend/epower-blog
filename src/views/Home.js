import React, { Component } from "react";
import HomeItems from "../components/HomeItems";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { baseUrl } from "../constants";
import { Row, Col } from "reactstrap";
import Loader from "../assets/img/loader.gif";

class Home extends Component {
  constructor() {
  	super();
    this.state = {
      posts: [],
      loading: true
    }
  }

  componentDidMount() {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        this.setState({
        	posts: result,
          loading: false
        });
      })
      .catch((err) => {
        console.log(err)
        this.setState({
          ...this.state,
          loading: false
        });
      })
  }

  render() {
    const { posts, loading } = this.state
    let postList = posts.map(post => 
      <HomeItems key={post.id} post={post} />
    )
  	return (
  		<div className="wrapper">
  			<Header />
  			<div className="container m-b-3">
  				<Row>
            {loading ? 
              <Col md={12} sm={12}>
                <img
                  src={Loader}
                  className="img-responsive mx-auto d-block"
                  style={{ height: "100px" }}
                  alt="loading gif"
                />
              </Col> : null
            }
            {postList ? postList : null}
	  			</Row>
  			</div>
  			<Footer />
  		</div>
  	)
  }
}

export default Home;