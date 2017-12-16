import React, { Component } from 'react';
import { connect } from 'react-redux';
import {loadArtworks} from '../../actions/artworks';
import SearchInput, {createFilter} from 'react-search-input'
import _ from 'lodash';
import './style.css';
 
const KEYS_TO_FILTERS = ['user.name', 'subject', 'dest.name', 'id']

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      query: ''
    }
    this.search = this.search.bind(this)
  }

    search(e) {
      let query = e.target.value;
      this.setState({query: query})
  }





   render () {
    let data = this.props.artworks;
    console.log(data);
    let query = this.state.query;
    let res = data.filter((elem)=>{
      let artworks = _.mapValues(elem, _.method('toLowerCase'));
      let x = query.toLowerCase();
      console.log(x);
      console.log(elem.title === x);
      return artworks.title === x;
    })
    

    console.log(res);


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

