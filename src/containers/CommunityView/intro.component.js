import React, {Component} from 'react';

export const IntroBlurb = ({shown}) => {
  return(
    <div className="introModal" style={{visibility: shown}} >
      <div className="introSignage">
        <div className="introWords">Your Selfies Here
        </div>
        <div className="introArrow">
        </div>
      </div>
    </div>
  );
}

// onClick={this.closeOnClickOutside}