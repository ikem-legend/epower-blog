import React, { Component } from "react";
// import { HomeItems } from "../components/HomeItems";
import Header from "../components/Header";
import { baseUrl } from "../constants";

class Home extends Component {
  constructor() {
  	super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch(baseUrl)
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
  	return (
  		<div>
  			<Header />
  			<p>Home</p>
  		</div>
  	)
  }
}

export default Home;