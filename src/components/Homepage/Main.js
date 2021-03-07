import React, { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: "",
      user: []
    }
  }

  componentDidMount() {
    /*fetch("https://api.spotify.com/v1/me", {
      method: 'GET',
      headers: {
        Authorization: "Bearer " + this.state.token
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))*/
  }

  render() {
    return (
      <div>
        Main
        {this.state.user.id}
      </div>
    );
  }
}

export default Main;