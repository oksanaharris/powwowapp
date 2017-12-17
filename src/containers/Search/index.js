import React, { Component } from 'react';
import { connect } from 'react-redux';
import {loadArtworks,loadOnMap} from '../../actions/artworks';
import {searchHelper} from './helpers';
import {Result,SearchField} from './Search.components';




class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      query: [],
      input: []
    }
    this.search = this.search.bind(this);
    this.searchResult = this.searchResult.bind(this);
    this.showOnMap = this.showOnMap.bind(this);
  }

  search(e) {
    let res = searchHelper(e,this.props.artworks); 
    this.setState({input: res})  
  }


  searchResult(elem,i){
    let keys = Object.keys(elem);
    return (
        <div key={i}>
          {keys.map((key,i)=>{
            return (<Result
                      key={i}
                      id={elem.id}
                      i={i}
                      val={elem[key]}>
                    </Result>
                    )
                })
              }
        </div>
      )
  }

  showOnMap(e){
    this.props.loadOnMap(e.target.id);
    this.setState({query: []})
  }


  render () {
    let res = this.state.input;
    return (
      <div>
        <SearchField handler={this.search}/>
        <div className="search-result" onClick={this.showOnMap}>
          {res.map(this.searchResult)}  
        </div>    
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
  {loadArtworks,loadOnMap}
)(Search)


export default ConnectedSearch;

