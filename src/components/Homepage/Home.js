import React, { Component } from "react";
import ListEntry from '../ListEntry/ListEntry';
import "../ListEntry/ListEntry.css";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

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
      <div style={{ width: "80%", textAlign: "center", padding: "40px" }}>
        <Card className='card'>
          <CardMedia
            component="img"
            alt="Artist"
            height='500'
            image="https://images.unsplash.com/photo-1576328172036-6d52156c525f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=882&q=80"
            title="Artist"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Your top {this.state.artists ? "artists" : "tracks"}
            </Typography>
          </CardContent>
          {list}
        </Card>
        {/* <h1>Your top {this.state.artists ? "artists" : "tracks"}</h1>
        <Button variant="contained" color="primary" type="submit" onClick={this.changeContent}>
          View {this.state.artists ? "tracks" : "artists"}
        </Button>
        <ul style={{ listStyleType: "none" }}>
          {list}
        </ul> */}
      </div>
    );
  }
}

export default Home;