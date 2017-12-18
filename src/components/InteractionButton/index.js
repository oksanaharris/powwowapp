import React from 'react';

export const InteractionButton = ({src, handleClick}) => (
  <img className="artworkview-interaction" src={src} onClick={handleClick} />
);

