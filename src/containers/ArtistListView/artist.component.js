import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export const ArtistComponent = ({artistid, photo, name, homebase, handleImageClick}) => {
  return (
    <div className="artistlistview-artist-container">
      <Link to={`/artist/${artistid}`}>
        <img className="artistlistview-artist-image" src={photo} onClick={handleImageClick}/>
      </Link>
      <div className="artistlistview-artist-info">
        <div className="artistlistview-artist-desc">
          <div>{name} </div>
          <div>from {homebase} </div>
        </div>
        <div className="artistlistview-art-container">

        </div>
      </div>
    </div>
  );
}