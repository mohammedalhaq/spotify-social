import React, { Component } from "react";

const {
  REACT_APP_CLIENT_ID,
  REACT_APP_AUTHORIZE_URL,
  REACT_APP_REDIRECT_URL,
  REACT_APP_SCOPE
} = process.env;

class Login extends Component {
  componentDidMount() {

  }

  authorize() {
    /*
    fetch(authUrl, {
      method: "GET",
      crossDomain: true,
    })
      .then(response => console.log(response))*/
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&scope=${encodeURIComponent('user-read-private')}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`

  }

  render() {
    return (
      <div className="login">
        <button type="submit" onClick={this.authorize}>
          Login to spotify
          </button>
      </div>
    );
  }
}

export default Login;