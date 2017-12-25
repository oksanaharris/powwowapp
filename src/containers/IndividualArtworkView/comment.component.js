import React, {Component} from 'react';

export const ArtworkComment = ({commentUserPic, commentBody, commentUserName, commentDate, commentArtworkPic}) => {
  return (
    <div className="artworkview-comment-container">
      <div className="artworkview-userpic-container">
        <img className="artworkview-comment-userpic" src={commentUserPic} />
      </div>
      <div className="artworkview-comment-body-container">
        <div className="artworkview-comment-body"> "{commentBody}"</div>
        <div className="artworkview-comment-info">
          <div className="artworkview-comment-user">by {commentUserName}</div>
          <div className="artworkview-comment-date">{commentDate}</div>
        </div>
      </div>
    </div>
  );
}