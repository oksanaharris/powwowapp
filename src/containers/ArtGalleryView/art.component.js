import React, {Component} from 'react';
import {InteractionButton} from '../../components/InteractionButton';
import {Link} from 'react-router-dom';

const map = './assets/map.svg';

export const ArtComponent = ({artworkid, src, starIcon, title, artist, handleImageClick, handleStarClick, handleMapClick}) => {
  return (
    <div className="galleryview-artwork-container">
      <Link to={`/artwork/${artworkid}`}>
        <img className="galleryview-image" src={src} onClick={handleImageClick}/>
      </Link>
      <div className="galleryview-info">
        <div className="galleryview-desc">
          <div>Title: {title} </div>
          <div>by {artist} </div>
        </div>
        <div className="galleryview-interactions">
          <InteractionButton imgClass="galleryview-interaction" src={starIcon} handleClick={handleStarClick}/>
          <InteractionButton imgClass="galleryview-interaction" src={map} handleClick={handleMapClick}/>
        </div>
      </div>
    </div>
  );
}