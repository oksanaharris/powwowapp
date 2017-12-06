import React from 'react';

const FindArtButtons = ({PichiAvo}) => {

  return (

      <button onClick={PichiAvo}style={button}>PichiAvo - Click to see the art</button>

    )
};

export default FindArtButtons;

const button = {
  marginTop: 20,
  height: 50,
  backgroundColor: 'cornflowerblue',
  border: 'transparent'
}
