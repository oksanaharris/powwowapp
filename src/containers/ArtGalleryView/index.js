import React, {Component} from 'react';

import {connect} from 'react-redux';
import {InteractionButton} from '../../components/InteractionButton';
import {loadArtworks} from '../../actions/artworks';

const active_star = './assets/star_active.png';
const inactive_star = './assets/star_inactive.png';

const map = './assets/map.svg';

const userId = 1;

const ArtComponent = ({src, starIcon, title, artist, handleStarClick, handleMapClick}) => {
  return (
    <div>
      <img className="galleryview-image" src={src} />
      <div className="galleryview-info">
        <div className="galleryview-desc">
          <div>Title: {title} </div>
          <div>by {artist} </div>
        </div>
        <div className="galleryview-interactions">
          <InteractionButton imgClass="galleryview-interaction" src={starIcon} handleClick={handleStarClick}/>
          <InteractionButton imgClass="galleryview-interaction" src={map} handleClick={handleMapClick}/>
        </div>
      </div>
    </div>
  );
}

class ArtGalleryView extends Component {
  constructor(props){
    super(props);
    this.state = {};

    // this.handleStarClick = this.handleStarClick.bind(this);
    // this.handleMapClick = this.handleMapClick.bind(this);
  }

  handleStarClick(e, id) {
    console.log('handle star click method activated on the gallery parent from id', id);
  }

  handleMapClick(e, id) {
    console.log('handle map click method activated on the gallery parent from id', id);
  }

  componentWillMount(){
    this.props.loadArtworks();
  }

  componentDidMount(){

  }

  render(){
    let artworks, artworkList = [];

    if (this.props.artworks.length > 0){
      artworks = this.props.artworks;
      artworkList = artworks.map(artwork => {
        let starIcon = inactive_star;

        if (artwork.Stars.some(star => {
          return star.user_id === userId;
        })){
          starIcon = active_star;
        }

        return (
          <li key={artwork.id} className="galleryview-li">
            <ArtComponent src={artwork.url} starIcon={starIcon} title={artwork.title} artist={artwork.Artist.name} handleStarClick={(e, id) => this.handleStarClick(e, artwork.id)} handleMapClick={(e, id) => this.handleMapClick(e, artwork.id)}/>
          </li>
          );
      });
    }

    return(
      <div className="main-container">
        <ul className="galleryview-ul">{artworkList}</ul>
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

ArtGalleryView = connect(
  mapStateToProps,
  mapDispatchToProps,
  )(ArtGalleryView);



export default ArtGalleryView;



// Scream for no reason at 4 am annoy owner until he gives you food say meow repeatedly until belly rubs, feels good. Cough furball loves cheeseburgers and sit in window and stare oooh, a bird, yum but pushes butt to face. Hiss and stare at nothing then run suddenly away rub face on owner yet dream about hunting birds for sit on the laptop. Cats secretly make all the worlds muffins scream at teh bath but lick the curtain just to be annoying claw at curtains stretch and yawn nibble on tuna ignore human bite human hand for thinking longingly about tuna brine. Hiss at vacuum cleaner make meme, make cute face and chew iPad power cord, or put toy mouse in food bowl run out of litter box at full speed but vommit food and eat it again.