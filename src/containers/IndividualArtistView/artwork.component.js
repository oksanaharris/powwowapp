import React, {Component} from 'react';

export const ArtworkByArtist = ({artworkpic, title, yearPainted}) => {
  return (
    <div className="artistview-artworklist-container">
      <div className="artistview-artwork-container">
        <img className="artistview-artworkpic" src={artworkpic} />
      </div>
      <div className="artistview-artwork-info-container">
        <div className="artistview-artwork-title"> "{title}"</div>
        <div className="artistview-comment-year">{yearPainted}</div>
      </div>
    </div>
  );
}