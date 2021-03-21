import React, { useState, useEffect } from "react";
import ListEntry from '../ListEntry/ListEntry';
import { Button } from '@material-ui/core';

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
    showContent("artists", "")} , []);


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

  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <h1>Your top {artists ? "artists" : "tracks"}</h1>
      <Button variant="contained" color="primary" type="submit" onClick={changeContent}>
        View {artists ? "tracks" : "artists"}
      </Button>
      <Button variant="contained" color="primary" type="submit" onClick={changeContent}>
        Change time
        </Button>
      <ul style={{ listStyleType: "none" }}>
        {list}
      </ul>
    </div>
  );
}

export default Home;