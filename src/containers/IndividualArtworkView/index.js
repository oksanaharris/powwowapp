import React, { Component } from 'react';

class IndividualArtworkView extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  render(){
    return(
      <div className="">
        <div className="mainArtworkImage"></div>
      {/*may include a click event or slide gesture later*/}
        <div className="interactions">
      {/*these will include click interactions*/}
          <div className="interaction like"></div>
          <div className="interaction checkin"></div>
          <div className="interaction comment"></div>
        </div>
        <div className="artTitle">Example Title</div>
        <div className="artist">by Sample Artist</div>
      {/*artist name will link to individual artist's page*/}
        <div className="description">Scream for no reason at 4 am annoy owner until he gives you food say meow repeatedly until belly rubs, feels good. Cough furball loves cheeseburgers and sit in window and stare oooh, a bird, yum but pushes butt to face. Hiss and stare at nothing then run suddenly away rub face on owner yet dream about hunting birds for sit on the laptop. Cats secretly make all the worlds muffins scream at teh bath but lick the curtain just to be annoying claw at curtains stretch and yawn nibble on tuna ignore human bite human hand for thinking longingly about tuna brine. Hiss at vacuum cleaner make meme, make cute face and chew iPad power cord, or put toy mouse in food bowl run out of litter box at full speed but vommit food and eat it again. </div>
      </div>
    );
  }
}

export default IndividualArtworkView;