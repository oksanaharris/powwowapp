import React, {Component} from 'react';

import {connect} from 'react-redux';

import {loadArtists} from '../../actions/artists.js';

import {Link} from 'react-router-dom';
import {ArtistComponent} from './artist.component.js';

const userId = 1;

class ArtistListView extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  handleImageClick(e, id){
    console.log('image click method activated on id ', id);

  }

  componentWillMount(){
    this.props.loadArtists();
  }

  componentDidMount(){

  }

  render(){
    let artists, artistList = [];

    if (this.props.artists.length > 0){

      artists = this.props.artists;

      artistList = artists.map(artist => {
        return (
          <li key={artist.id} className="artistlistview-li">
            <ArtistComponent artistid={artist.id} photo={artist.photourl} name={artist.name} homebase={artist.homebase} handleImageClick={(e, id) => this.handleImageClick(e, artist.id)} />
          </li>
          );
      });
    }

    return(
      <div className="main-container">
        <ul className="artistlistview-ul">{artistList}</ul>
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

ArtistListView = connect(
  mapStateToProps,
  mapDispatchToProps,
  )(ArtistListView);



export default ArtistListView;
