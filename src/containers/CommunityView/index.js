import React, {Component} from 'react';

import {connect} from 'react-redux';

import {loadComments} from '../../actions/comments';

// import {loadPhotoUploads} from '../../actions/photoUploads';

import {Link} from 'react-router-dom';

import {CommunityComment} from './comment.component.js';

import moment from 'moment';

import {Carousel} from 'react-responsive-carousel';

import {IntroBlurb} from './intro.component.js';

let userId = 2;

class CommunityView extends Component {
  constructor(props){
    super(props);
    this.state = {
      introBlurbOpen: 'hidden'
    };
  }

  componentWillMount(){
    this.props.loadComments();
    // this.props.loadPhotoUploads();
  }

  componentDidMount(){

  }

  render(){
    let commentList = [];
    let photoList = [];

    if (this.props.comments.length > 0){

      console.log('this props comments HERE', this.props.comments);
      let comments = this.props.comments;

      commentList = comments.map(comment => {
        return(
          <li key={comment.id} className="communityview-comment-li">
            <CommunityComment commentUserPic={comment.User.picture} commentBody={comment.body} commentPic={comment.photourl} commentUserName={comment.User.username} commentDate={moment(comment.createdAt).fromNow()} commentArtworkPic={comment.Artwork.url} artworkid={comment.Artwork.id}/>
          </li>
        );
      });

      photoList = this.props.comments.filter(comment => {
        return comment.photourl;
      })
      .map(comment => {
        return(
          <div key={comment.id} className="artworkview-photo-li">
            <img src={comment.photourl} />
          </div>
        );
      });

    }



    return(
      <div className="communityview-main-container">
        {/*<div className="community-worldmap-container">
          <img className="communityview-worldmap" src="/assets/visitor_map.jpg" alt="world_map" />
          <img className="heart-map" src="/assets/heart.png" alt="heart" />
        </div>*/}
        <IntroBlurb shown={this.state.introBlurbOpen} />
        <Carousel showArrows={false} showStatus={false} showIndicators={false} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={900}>
          {/*<div>
            <img src="/assets/face1.jpg" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="/assets/face2.jpg" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="/assets/artist1.jpg" />
            <p className="legend">Legend 3</p>
          </div>*/}
          {photoList}
        </Carousel>
        <div className="slider-container">
          <div className="slider-photo"></div>
        </div>
        <ul className="communityview-comments-ul">{commentList}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
    photoUploads: state.photoUploads
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadComments: () => {
      dispatch(loadComments());
    }
    // loadPhotoUploads: () => {
    //   dispatch(loadPhotoUploads());
    // }
    // removeStar: (id) => {
    //   dispatch(removeStarAction(id));
    // },
    // addStar: (artwork_id, user_id) => {
    //   dispatch(addStarAction(artwork_id, user_id));
    // },
    // setToPreviousStage: (id) => {
    //   dispatch(previousStageAction(id));
    // },
    // deleteTask: (id) => {
    //   dispatch(deleteTaskAction(id));
    // }
  }
}

CommunityView = connect(
  mapStateToProps,
  mapDispatchToProps,
  )(CommunityView);



export default CommunityView;



// Scream for no reason at 4 am annoy owner until he gives you food say meow repeatedly until belly rubs, feels good. Cough furball loves cheeseburgers and sit in window and stare oooh, a bird, yum but pushes butt to face. Hiss and stare at nothing then run suddenly away rub face on owner yet dream about hunting birds for sit on the laptop. Cats secretly make all the worlds muffins scream at teh bath but lick the curtain just to be annoying claw at curtains stretch and yawn nibble on tuna ignore human bite human hand for thinking longingly about tuna brine. Hiss at vacuum cleaner make meme, make cute face and chew iPad power cord, or put toy mouse in food bowl run out of litter box at full speed but vommit food and eat it again.