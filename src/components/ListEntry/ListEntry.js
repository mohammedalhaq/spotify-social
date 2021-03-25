import React, { Component } from "react";
import "./ListEntry.scss";

class ListEntry extends Component {
  render() {
    const item = this.props.entry;
    if (this.props.artists === true) {
      return (
        <li>
          <div className="entry">
            <p>{this.props.index}</p>
            <img src={item.images[2].url} alt="artist_img" />
            <h5 className="TopArtistName">{item.name}</h5>
          </div>
        </li>
      );
    } else if (this.props.artists === false) {
      return (
        <li>
          <div className="entryTracks" >
            <p>{this.props.index}</p>
            <img src={item.album.images[1].url} alt="track_img" />
            <h3 className="TopTrack">{item.name}</h3>
            <h5 className="TopTrackArtist">{item.album.artists[0].name}</h5>
          </div>
        </li>
      )
    }
  }
}

export default ListEntry;