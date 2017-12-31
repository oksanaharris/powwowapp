import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export const ArtworkByArtist = ({artworkid, artworkpic, title, yearPainted}) => {
  return (
    <div className="artistview-artworklist-container">
      <div className="artistview-artwork-container">
        <Link to={`/artwork/${artworkid}`}>
          <img className="artistview-artworkpic" src={artworkpic} />
        </Link>
      </div>
      {/*<div className="artistview-artwork-info-container">*/}
        {/*<div className="artistview-artwork-title"> "{title}"</div>*/}
        {/*<div className="artistview-comment-year">{yearPainted}</div>*/}
      {/*</div>*/}
    </div>
  );
}