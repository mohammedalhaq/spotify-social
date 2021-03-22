import React, { Component } from "react";
import "./Login.css";
import { Button } from '@material-ui/core';
import logo from "../../assets/Spotify_Logo_RGB_Black.png";

const {
  REACT_APP_CLIENT_ID,
  REACT_APP_AUTHORIZE_URL,
  REACT_APP_REDIRECT_URL,
  REACT_APP_SCOPE
} = process.env;

class Login extends Component {
  authorize() {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&scope=${encodeURIComponent('user-read-private user-top-read')}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`
  }

  render() {
    return (
      <div className="full">
        <div className="header">
          Brand
        </div>
        <div className="login">
          <h1 className="discover">Discover your music</h1>
          <div>
            <Button variant="contained" color="primary" type="submit" onClick={this.authorize}>
              Login with spotify
          </Button>
          </div>
        </div>
        <div className="login" style={{ bottom: "0" }}>
          <img className="logo" src={logo} alt="logo" />
        </div>
      </div>
    );
  }
}

export default Login;