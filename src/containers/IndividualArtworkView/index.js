import React, {Component} from 'react';

import {connect} from 'react-redux';
import {InteractionButton} from '../../components/InteractionButton';
import {loadArtworks} from '../../actions/artworks';
// import {nextStageAction} from '../../actions';
// import {previousStageAction} from '../../actions';

// id will need to be passed in on click from the previous view (map or gallery)
// remaining questions:
// how does router work?
// given that, when/where is it best for us to run load_artworks, etc.?

const selectedArtworkId = 2;

const star = './assets/star_inactive.png';
const comment = './assets/comment.png';
const map = './assets/map.svg';

class IndividualArtworkView extends Component {
  constructor(props){
    super(props);
    this.state = {};

    this.handleStarClick = this.handleStarClick.bind(this);
    this.handleCommentClick = this.handleCommentClick.bind(this);
    this.handleMapClick = this.handleMapClick.bind(this);
  }

  handleStarClick() {
    console.log('handle star click method activated on the parent');
  }

  handleCommentClick() {
    console.log('handle comment click method activated on the parent');
  }

  handleMapClick() {
    console.log('handle map click method activated on the parent');
  }

  componentWillMount(){
    this.props.loadArtworks();
  }

  componentDidMount(){

  }

  render(){
    let link = "http://lorempixel.com/400/200/cats";
    let title = "Title";
    let artist = "Artist";
    let description = "Description";

    if (this.props.artworks.length > 0){
      let artwork = this.props.artworks.filter(artwork => {
        return artwork.id === selectedArtworkId;
      })[0];

      console.log('our artwork', artwork);

      title = artwork.title;
      artist = artwork.Artist.name;
      description = artwork.description;
      link = artwork.url;
    }

    return(
      <div className="main-container">
        <img className="artworkview-main-image" src={link} />
        <div className="artworkview-interactions">
          <InteractionButton className="artworkview-interaction" src={star} handleClick={this.handleStarClick}/>
          <InteractionButton className="artworkview-interaction" src={comment} handleClick={this.handleCommentClick}/>
          <InteractionButton className="artworkview-interaction" src={map} handleClick={this.handleMapClick}/>
        </div>
        <div className="artworkview-info-container">
          <div className="artworkview-title artworkview-info-piece">
          {title}
          </div>
          <div className="artworkview-artist artworkview-info-piece">
          {artist}
          </div>
          <div className="artworkview-description artworkview-info-piece">
          {description}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    artworks: state.artworks
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadArtworks: () => {
      dispatch(loadArtworks());
    }
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
  mapDispatchToProps,
  )(IndividualArtworkView);



export default IndividualArtworkView;



// Scream for no reason at 4 am annoy owner until he gives you food say meow repeatedly until belly rubs, feels good. Cough furball loves cheeseburgers and sit in window and stare oooh, a bird, yum but pushes butt to face. Hiss and stare at nothing then run suddenly away rub face on owner yet dream about hunting birds for sit on the laptop. Cats secretly make all the worlds muffins scream at teh bath but lick the curtain just to be annoying claw at curtains stretch and yawn nibble on tuna ignore human bite human hand for thinking longingly about tuna brine. Hiss at vacuum cleaner make meme, make cute face and chew iPad power cord, or put toy mouse in food bowl run out of litter box at full speed but vommit food and eat it again.