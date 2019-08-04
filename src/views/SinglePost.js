import React, { Component } from "react";
// import { SinglePostDetails } from "../components/SinglePostDetails";
import { baseUrl } from "../constants";

class SinglePost extends Component {
  constructor() {
    super();
    this.state = {
      post: []
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
        <p>Single Post</p>
      </div>
    )
  }
}

export default SinglePost;