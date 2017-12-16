import React, { Component } from 'react';
import { connect } from 'react-redux';
import {loadArtworks} from '../../actions/artworks';
import {searchHelper} from './helpers';
import _ from 'lodash';
import './style.css';
 
const KEYS_TO_FILTERS = ['user.name', 'subject', 'dest.name', 'id']

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      query: [],
      input: []
    }
    this.search = this.search.bind(this)
  }

    search(e) {
      let res = searchHelper(e,this.props.artworks); 
      this.setState({input: [res]})  
  }





   render () {
    let res = this.state.input;



    return (
      <div>
      <div className="search-temp">
        <img src="http://bit.ly/2ygeReT"  alt="icon"  className="search-icon-temp"/>
        <input type="text" placeholder="Search" className="search-input-temp" onChange={this.search}/>
      </div>
        
      {res.map((term,i)=>{
        return(
            <p key={i} className="search-result">{term.title}</p>

          )
      })}
      
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    artworks: state.artworks
    }
}

const ConnectedSearch = connect(
  mapStateToProps,
  {loadArtworks}
)(Search)


export default ConnectedSearch;

