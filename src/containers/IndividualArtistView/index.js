import React, {Component} from 'react';

import {connect} from 'react-redux';
import {TopBarNoStar} from './topBarNoStar.component.js';
import {loadArtists} from '../../actions/artists';
import {Link} from 'react-router-dom';

let userId = 2;



class IndividualArtistView extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentWillMount(){
    this.props.loadArtists();
  }

  componentDidMount(){

  }

  render(){

    let photo = "http://lorempixel.com/400/200/cats";
    let name = "Name";
    let homebase = "Homebase";
    let bio = "Bio";
    let artistId;

    //checks if this.props.artists has loaded
    if (this.props.artists.length > 0){
      let artist = this.props.artists.filter(artist => {
        console.log('filtering on artists');
        return artist.id === parseFloat(this.props.match.params.artistid);
      })[0];

      console.log('artist', artist);

      //in case someone tries to access /artist/1234875 random number uri
      if (!artist) {return <div>No such artist</div>;}

      //handles artist info display
      name = artist.name;
      homebase = artist.homebase;
      bio = artist.bio;
      photo = artist.photourl;
      artistId = artist.id;

    }


    return(
      <div className="artistview-main-container">
        <TopBarNoStar />
        <div className="artistview-image-container">
          <img className="artistview-main-image" src={photo} />
        </div>
        <div className="artistview-info-container">
          <div className="artistview-name artistview-info-piece">
          {name}
          </div>
          <div className="artistview-homebase artistview-info-piece">
          from {homebase}
          </div>
          <div className="artistview-bio artistview-info-piece">
          {bio}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    artists: state.artists
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadArtists: () => {
      dispatch(loadArtists());
    }
  }
}

IndividualArtistView = connect(
  mapStateToProps,
  mapDispatchToProps,
  )(IndividualArtistView);



export default IndividualArtistView;

