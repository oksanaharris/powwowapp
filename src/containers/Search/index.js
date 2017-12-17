import React, { Component } from 'react';
import { connect } from 'react-redux';
import {loadArtworks} from '../../actions/artworks';
import {searchHelper} from './helpers';
import _ from 'lodash';
import './style.css';
 
const data = [{id: 1, title: 'match - 1'},{id: 2, title: 'not - 2'},{id: 3, title: 'match - 3'}]

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
      let res = searchHelper(e,data); 
      console.log(res);
      this.setState({input: res})  
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

