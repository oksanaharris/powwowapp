import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export const CommunityComment = ({artworkid, commentUserPic, commentBody, commentUserName, commentDate, commentArtworkPic}) => {
  return (
    <div className="communityview-comment-container">
      <div className="communityview-userpic-container">
        <img className="communityview-comment-userpic" src={commentUserPic} />
      </div>
      <div className="communityview-comment-body-container">
        <div className="communityview-comment-body"> "{commentBody}"</div>
        <div className="communityview-comment-info">
          <div className="communityview-comment-user">by {commentUserName}</div>
          <div className="communityview-comment-date">{commentDate}</div>
        </div>
      </div>
      <div className="communityview-artworkpic-container">
        <Link to={`/artwork/${artworkid}`}>
          <img className="communityview-comment-artworkpic" src={commentArtworkPic} />
        </Link>
      </div>
    </div>
  );
}