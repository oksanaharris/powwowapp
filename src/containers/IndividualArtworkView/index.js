import React, {Component} from 'react';

import {connect} from 'react-redux';
import {InteractionButton} from '../../components/InteractionButton';
import {loadArtworks} from '../../actions/artworks';
import {loadCommentsByArtwork} from '../../actions/comments';
import {removeStarAction} from '../../actions/artworks';
import {addStarAction} from '../../actions/artworks';
import {Link} from 'react-router-dom';
import AddComment from '../AddComment';
import {ArtworkComment} from './comment.component.js';

import moment from 'moment';
// import {previousStageAction} from '../../actions';

// id will need to be passed in on click from the previous view (map or gallery)
// remaining questions:
// how does router work?
// given that, when/where is it best for us to run load_artworks, etc.?

// const selectedArtworkId = 1;


const active_star = '/assets/star_active.png';
const inactive_star = '/assets/star_inactive.png';
let star = inactive_star;

const comment = '/assets/comment.png';
const map = '/assets/map.svg';

let userId = 2;

class IndividualArtworkView extends Component {
  constructor(props){
    super(props);
    this.state = {
      commentFormOpen: 'hidden'
    };

    // no longer need this now that binding them in the props declaration, right?
    // this.handleStarClick = this.handleStarClick.bind(this);
    // this.handleCommentClick = this.handleCommentClick.bind(this);
    // this.handleMapClick = this.handleMapClick.bind(this);
    this.closeCommentForm = this.closeCommentForm.bind(this);
  }

  handleStarClick(e, id) {
    console.log('handle star click method activated on the indView parent from id', id);
    // if star is active then we want it to be deactivated, and vice versa
    // if star is active, it means that there is an entry in the Star table for this user and artwork

    // this is already double filtering of all artworks;
    // after the filter or just artwork, alternatively, we could look at the user's stars for matching artwork_id
    let starId;

    if (this.props.artworks.filter(artwork => {
      return artwork.id === id;
      })[0].Stars.filter(star => {
        starId = star.id;
        console.log('star id is', starId);
        return star.user_id === userId;
      }).length > 0)
    {
      console.log('executing remove star props');
      this.props.removeStar(starId);
    } else {
      console.log('executing add star props');
      this.props.addStar(id, userId);
    }
  }

  handleCommentClick(e, id) {
    console.log('handle comment click method activated on indView parent from id', id);
    this.setState({
      commentFormOpen: 'visible'
    })
  }

  closeCommentForm(e) {
    console.log('running closeCommentForm on IndArtwork');
    this.setState({commentFormOpen: 'hidden'});
  }

  handleMapClick(e, id) {
    console.log('handle map click method activated on the indView parent from id', id);
  }

  componentWillMount(){
    this.props.loadArtworks();
    this.props.loadCommentsByArtwork(parseFloat(this.props.match.params.artworkid));
    // does this need to be a promise? can it?
  }

  componentDidMount(){

  }

  render(){

    //for alternate dislay beore this.props.artworks loads
    let link = "http://lorempixel.com/400/200/cats";
    let title = "Title";
    let artist = "Artist";
    let description = "Description";
    let artworkId;
    let commentsSectionHeader = '';
    let commentList = [];

    //checks if this.props.artworks has loaded
    if (this.props.artworks.length > 0){
      let artwork = this.props.artworks.filter(artwork => {
        return artwork.id === parseFloat(this.props.match.params.artworkid);
      })[0];

      //in case someone tries to access /artwork/1234875 random number uri
      if (!artwork) {return <div>No such artwork</div>;}

      //handles artwork info display
      title = artwork.title;
      artist = artwork.Artist.name;
      description = artwork.description;
      link = artwork.url;
      artworkId = artwork.id;

      //handles starred or not starred display
      if (artwork.Stars.some(star => {
        return star.user_id === userId;
      })){
        star = active_star;
      } else {
        star = inactive_star;
      }


      //handles display of previously left comments
      if (this.props.comments.length > 0){
        commentsSectionHeader = 'Visitor Comments';

        console.log('this props comments HERE', this.props.comments);
        let comments = this.props.comments;

        commentList = comments.map(comment => {
          return(
            <li key={comment.id} className="artworkview-comment-li">
              <ArtworkComment commentUserPic={comment.User.picture} commentBody={comment.body} commentUserName={comment.User.username} commentDate={moment(comment.createdAt).fromNow()} />
            </li>
          );
        });
      }

    }


    return(
      <div className="artworkview-main-container">
        <AddComment shown={this.state.commentFormOpen} closeCommentForm={this.closeCommentForm} artworkId={artworkId} userId={userId}/>
        <img className="artworkview-main-image" src={link} />
        <div className="artworkview-interactions">
          <InteractionButton imgClass="artworkview-interaction" src={star} handleClick={(e, id) => this.handleStarClick(e, artworkId)} />
          <InteractionButton imgClass="artworkview-interaction" src={comment} handleClick={(e, id) => this.handleCommentClick(e, artworkId)}/>
          <InteractionButton imgClass="artworkview-interaction" src={map} handleClick={(e, id) => this.handleMapClick(e, artworkId)}/>
        </div>
        <div className="artworkview-info-container">
          <div className="artworkview-title artworkview-info-piece">
          {title}
          </div>
          <div className="artworkview-artist artworkview-info-piece">
          by {artist}
          </div>
          <div className="artworkview-description artworkview-info-piece">
          {description}
          </div>
        </div>
        <div className="artworkview-comments-section">
          <div className="artworkview-comments-section-header">{commentsSectionHeader}</div>
          <ul className="artworkview-comments-ul">{commentList}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    artworks: state.artworks,
    comments: state.comments
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadArtworks: () => {
      dispatch(loadArtworks());
    },
    removeStar: (id) => {
      dispatch(removeStarAction(id));
    },
    addStar: (artwork_id, user_id) => {
      dispatch(addStarAction(artwork_id, user_id));
    },
    loadCommentsByArtwork: (artwork_id) => {
      dispatch(loadCommentsByArtwork(artwork_id));
    }
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