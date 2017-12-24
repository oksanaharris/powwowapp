import React from 'react';

export const InteractionButton = ({src, imgClass, handleClick}) => (
  <img className={imgClass} src={src} onClick={handleClick} />
);

