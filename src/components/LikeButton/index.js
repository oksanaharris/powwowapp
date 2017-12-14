import React from 'react';

const LikeButton = ({task, priority, createdBy, assignedTo, onNextButtonClick, onPreviousButtonClick, onDeleteClick, buttonText, openEditForm, onCardDrag}) => {
  return (
    <div className={"cardContainer " + priority} onDoubleClick={openEditForm} draggable="true" onDragStart={onCardDrag}>
      <h3 className="cardTitle">{task}</h3>
      <p className="cardDetails">Priority: {priority.toUpperCase()}</p>
      <p className="cardDetails">Created by: {createdBy}</p>
      <p className="cardDetails">Assigned to: {assignedTo}</p>
      <div className="cardButtonContainer">
        <div className="cardButton leftArrowButton" onClick={onPreviousButtonClick}>
          <img className="leftArrowImage" src="./play-arrow.svg" alt=""/>
        </div>
        <div className="cardButton deleteButton" onClick={onDeleteClick}>
          <img className="trashCanImage" src="./waste-bin.svg" alt=""/>
        </div>
        <div className="cardButton rightArrowButton" onClick={onNextButtonClick}>
          <img className="rightArrowImage" src="./play-arrow.svg" alt=""/>
        </div>
      </div>
    </div>
  );
}

export default LikeButton;

// styling is the same except for:
// icon inside

// when you click a likebutton (onClick event):
// the icon changes color
//