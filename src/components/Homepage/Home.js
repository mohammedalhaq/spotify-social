import React, { useState, useEffect } from "react";
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


function Home() {
  const [content, setContent] = useState([]);
  const [artists, setArtists] = useState(true);

  const showContent = (type, time) => { //"/?t="
    const token = window.location.hash.split("access_token=")[1].split("&token_type=")[0]
    fetch("https://api.spotify.com/v1/me/top/" + type + time, {
      method: 'GET',
      headers: {
        Authorization: "Bearer " + token
      }
    })
      .then(response => response.json())
      .then(data => setContent(data.items))
  }

  useEffect(() => {
    showContent("artists", "")
  }, []);


  const changeContent = () => {
    const temp = artists;
    setContent([]);
    setArtists(!temp);
    const type = artists === true ? "tracks" : "artists";
    showContent(type, "");
  }

  const list = content.map((item, key) =>
    <ListEntry key={key} entry={item} index={key + 1} artists={artists} />
  )

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <div style={{ width: "70%", textAlign: "center", 'padding-left': '15vw' }}>
      <Button variant="contained" color="primary" type="submit" onClick={changeContent}>
        View {artists ? "tracks" : "artists"}
      </Button>
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
            Your Top {artists ? "Artists" : "Tracks"}
          </Typography>
          <Tabs value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
            style={{ 'margin-bottom': '-1.5em' }}>
            <Tab label="All time" />
            <Tab label="Last Month" />
            <Tab label="Last 6 Months" />
          </Tabs>

        </CardContent>
        {/* <TabPanel value={value} index="one">
          {list}
        </TabPanel>
        <TabPanel value={value} index="two">
          {list}
        </TabPanel>
        <TabPanel value={value} index="three">
          {list}
        </TabPanel> */}
        {list}
      </Card>

      {/* <h1>Your top {this.state.artists ? "artists" : "tracks"}</h1>
        
        <ul style={{ listStyleType: "none" }}>
          {list}
        </ul> */}
    </div>
  );
}

export default Home;