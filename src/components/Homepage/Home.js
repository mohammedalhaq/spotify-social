import React, { Component } from "react";
import ListEntry from '../ListEntry/ListEntry';
import { Button } from '@material-ui/core';
import "../ListEntry/ListEntry.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: [],
      artists: true
    }

    this.showContent = this.showContent.bind(this);
    this.changeContent = this.changeContent.bind(this);
  }

  showContent(type, time) {
    const token = window.location.hash.split("access_token=")[1].split("&token_type=")[0]
    fetch("https://api.spotify.com/v1/me/top/" + type, {
      method: 'GET',
      headers: {
        Authorization: "Bearer " + token
      }
    })
      .then(response => response.json())
      .then(data => this.setState({ content: data.items }))
  }


  componentDidMount() {
    this.showContent("artists", "");
  }

  changeContent() {
    const temp = this.state.artists;
    this.setState({ content: [], artists: !temp })
    const type = this.state.artists === true ? "tracks" : "artists";
    this.showContent(type, "");
  }

  render() {
    const list = this.state.content.map((item, key) =>
      <ListEntry key={key} entry={item} index={key + 1} artists={this.state.artists} />
    )

    return (
      <div style={{ width: "100%", textAlign: "center" }}>
        <h1>Your top {this.state.artists ? "artists" : "tracks"}</h1>
        <Button variant="contained" color="primary" type="submit" onClick={this.changeContent}>
          View {this.state.artists ? "tracks" : "artists"}
        </Button>
        <ul style={{ listStyleType: "none" }}>
          {list}
        </ul>
      </div>
    );
  }
}

export default Home;