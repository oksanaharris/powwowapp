import React, {Component} from 'react';

export const ArtworkComment = ({commentUserPic, commentBody, commentPic, commentUserName, commentDate, commentArtworkPic}) => {

  let imgVisibility = commentPic ? 'inline-block' : 'none';

  return (
    <div className="artworkview-comment-container">
      <div className="artworkview-userpic-container">
        <img className="artworkview-comment-userpic" src={commentUserPic} />
      </div>
      <div className="artworkview-comment-body-container">
        <div className="artworkview-comment-body"> "{commentBody}"</div>
        <img style={{display: imgVisibility}} className="communityview-comment-photoupload" src={commentPic} />
        <div className="artworkview-comment-info">
          <div className="artworkview-comment-user">by {commentUserName}</div>
          <div className="artworkview-comment-date">{commentDate}</div>
        </div>
      </div>
    </div>
  );
}