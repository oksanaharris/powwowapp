import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export const CommunityComment = ({artworkid, commentUserPic, commentBody, commentPic, commentUserName, commentDate, commentArtworkPic}) => {

  let photoVisibility = 'none';

  if (commentPic) {
    photoVisibility = 'inline-block';
  }

  let muralVisibility = 'inline-block';
  let muralAssociation = true;

  if (artworkid === 1){
    muralVisibility = 'none';
    muralAssociation = false;
  }

  // if no comment body
  // if uploaded from the main camera button, no mural displayed on comment, no

  return (
    <div className="communityview-comment-container">
      <div className="communityview-userpic-container">
        <img className="communityview-comment-userpic" src={commentUserPic} />
      </div>
      <div className={muralAssociation ? "communityview-comment-body-container" : "communityview-comment-body-container-nomural"}>
        <div className="communityview-comment-info">
          <div className="communityview-comment-user">{commentUserName}</div>
          <div className="communityview-comment-date">{commentDate}</div>
        </div>
        <div className="communityview-comment-body"> {commentBody}</div>
        <div style={{display: photoVisibility}} className="communityview-comment-body">
          <img className="communityview-comment-photoupload" src={commentPic} />
        </div>
      </div>
      <div style={{display: muralVisibility}} className="communityview-artworkpic-container">
        <Link to={`/artwork/${artworkid}`}>
          <img className="communityview-comment-artworkpic" src={commentArtworkPic} />
        </Link>
      </div>
    </div>
  );
}