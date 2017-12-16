import React, { Component } from 'react';
import { connect } from 'react-redux';
import {loadArtworks} from '../../actions/artworks';
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
      let data = this.props.artworks;
      let query = e.target.value;
      let m = data.map((elem)=>{
        let x = _.mapValues(elem, _.method('toLowerCase'));
        if(query.length > 4){
          if(x.title.match(query)){
            this.setState({input: [x]})
          }
        }
      })    
  }





   render () {
    let res = this.state.input;
    console.log(res);
    //console.log(data);
    let data = this.props.artworks;
    // let res = data.filter((elem)=>{
    //   let artworks = _.mapValues(elem, _.method('toLowerCase'));
    //   //let x = query.toLowerCase();
    //   console.log(artworks);
    //   //console.log(elem.title === x);
    //   ///return artworks.title === x;
    // })
    

    //console.log(res);


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

