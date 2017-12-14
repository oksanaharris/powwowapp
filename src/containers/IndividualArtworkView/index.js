import React, {Component} from 'react';

import {connect} from 'react-redux';
// import {nextStageAction} from '../../actions';
// import {previousStageAction} from '../../actions';


// what am I trying to do??
// display the information that's needed
// depending on which image was clicked on the page before (pass an id)
// I need to do an api/artwork/get/:id that'll give me title, artist, link to artist's page, image, description
// the interactions are assummed to be likes, comment, checkin/photo

//so most of those things will be {this.title}, etc.
//is that object passed in as props?
//are the interactions consts that get something passed into them too?


class IndividualArtworkView extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return(
      <div className="main-container">
        <div className="artworkview-main-image"></div>
        <div className="artworkview-interactions">
          <div className="artworkview-interaction"></div>
          <div className="artworkview-interaction"></div>
          <div className="artworkview-interaction"></div>
        </div>
        <div className="artworkview-info-container">
          <div className="artworkview-title artworkview-info-piece">Example Title</div>
          <div className="artworkview-artist artworkview-info-piece">by Sample Artist</div>
          <div className="artworkview-description artworkview-info-piece">Scream for no reason at 4 am annoy owner until he gives you food say meow repeatedly until belly rubs, feels good. Cough furball loves cheeseburgers and sit in window and stare oooh, a bird, yum but pushes butt to face. Hiss and stare at nothing then run suddenly away rub face on owner yet dream about hunting birds for sit on the laptop. Cats secretly make all the worlds muffins scream at teh bath but lick the curtain just to be annoying claw at curtains stretch and yawn nibble on tuna ignore human bite human hand for thinking longingly about tuna brine. Hiss at vacuum cleaner make meme, make cute face and chew iPad power cord, or put toy mouse in food bowl run out of litter box at full speed but vommit food and eat it again. </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // cards: state.cards
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    // moveToColumn: (id, column) => {
    //   dispatch(moveToColumnAction(id, column));
    // },
    // setToNextStage: (id) => {
    //   dispatch(nextStageAction(id));
    // },
    // setToPreviousStage: (id) => {
    //   dispatch(previousStageAction(id));
    // },
    // deleteTask: (id) => {
    //   dispatch(deleteTaskAction(id));
    // }
  }
}

IndividualArtworkView = connect(
  mapStateToProps,
  mapDispatchToProps
  )(IndividualArtworkView);



export default IndividualArtworkView;