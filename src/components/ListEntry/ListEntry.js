import React, { Component } from "react";
import "./ListEntry.css";

class ListEntry extends Component {
  render() {
    const item = this.props.entry;
    if (this.props.artists === true) {
      return (
        <li>
          <div className="entry">
            <img src={item.images[2].url} alt="artist_img" />
            <h5>{item.name}</h5>
            <p>{this.props.index}</p>
          </div>
        </li>
      );
    } else if (this.props.artists === false) {
      return (
        <li>
          <div className="entry" >
            <img src={item.album.images[1].url} alt="track_img" />
            <h4>{item.name}</h4>
            <h5>{item.album.artists[0].name}</h5>
            <p>{this.props.index}</p>
          </div>
        </li>
      )
    }
  }
}

export default ListEntry;