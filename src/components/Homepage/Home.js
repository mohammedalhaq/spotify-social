import React, { Component } from "react";

const {
  REACT_APP_CLIENT_ID,
  REACT_APP_CLIENT_SECRET
} = process.env;

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: "",
      user: []
    }
  }

  componentDidMount() {
    const code = window.location.hash.split("access_token=")[1].split("&token_type=")[0]
    fetch("https://api.spotify.com/v1/me", {
      method: 'GET',
      headers: {
        Authorization: "Bearer " + code
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))

    /*fetch("https://accounts.spotify.com/api/token", {
      method: 'POST',
      body: {
        'grant_type': 'client_credentials',
        'code': code,
        'redirect_uri': 'http://localhost:3000/main',
        'client_secret': REACT_APP_CLIENT_SECRET,
        'client_id': REACT_APP_CLIENT_ID,
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))*/
  }

  render() {
    return (
      <div>
        Home
        {this.state.user.id}
      </div>
    );
  }
}

export default Home;