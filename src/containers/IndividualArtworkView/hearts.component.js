import React, {Component} from 'react';

export const Hearts = ({shown}) => {
  return (
    <div className="hearts-animation" style={{visibility: shown}}>
      <div className="heart1">&hearts;</div>
      <div className="heart2">&hearts;</div>
      <div className="heart3">&hearts;</div>
      <div className="heart4">&hearts;</div>
      <div className="heart5">&hearts;</div>
      <div className="heart6">&hearts;</div>
      <div className="heart7">&hearts;</div>
      <div className="heart8">&hearts;</div>
    </div>
  );
}