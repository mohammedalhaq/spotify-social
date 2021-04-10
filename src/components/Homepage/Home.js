import React, { useState, useEffect } from "react";
import ListEntry from '../ListEntry/ListEntry';
import "../ListEntry/ListEntry.scss";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function Home() {
  const [content, setContent] = useState([]);
  const [artists, setArtists] = useState(false);
  const [timeRange, setTime] = useState("/?time_range=long_term");
  const [header, setHeader] = useState("https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80");

  const showContent = (type, time) => {
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
    showContent("tracks", "/?time_range=long_term")
  }, []);


  const changeContent = () => {
    const temp = artists;
    setContent([]);
    setArtists(!temp);
    const type = artists === true ? "tracks" : "artists";
    showContent(type, timeRange);
  }



  const [value, setValue] = React.useState(0);


  const handleChange = (event, newValue) => {
    let time = "/?time_range=long_term ";
    if (event.target.outerText === "LAST 6 MONTHS") {
      time = "/?time_range=medium_term";
    } else if (event.target.outerText === "LAST MONTH") {
      time = "/?time_range=short_term";
    }
    setTime(time);

    if (artists === true) {
      const type = "artists";
      showContent(type, time);
      setHeader("https://images.pexels.com/photos/1261578/pexels-photo-1261578.jpeg?cs=srgb&dl=pexels-stas-knop-1261578.jpg&fm=jpg")
    } else {
      const type = "tracks";
      showContent(type, time);
      setHeader("https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")

    }
    setValue(newValue);
  };


  const list = content.map((item, key) =>
    <ListEntry key={key} entry={item} index={key + 1} artists={artists} />
  )
  return (
    <div className="main">
      <Card className='card'>
        <CardMedia
          component="img"
          alt="Artist"
          height='500'
          image={header}
          title="Artist"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Your Top {artists ? "Artists" : "Tracks"}
            <Button style={{ float: "right" }} variant="contained" color="primary" type="submit" onClick={changeContent}>
              View {artists ? "tracks" : "artists"}
            </Button>
          </Typography>
          <Tabs value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
            style={{ marginBottom: '-1.5em' }}>
            <Tab label="All time" />
            <Tab label="Last 6 Months" />
            <Tab label="Last Month" />
          </Tabs>

        </CardContent>
        {list}
      </Card>
    </div>
  );
}

export default Home;