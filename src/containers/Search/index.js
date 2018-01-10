import React, { Component } from 'react';
import { connect } from 'react-redux';
import {loadArtworks,loadOnMap} from '../../actions/artworks';
import {searchHelper} from './helpers';
import {Result,SearchField, MarkerPopup} from './Search.components';




class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      query: '',
      input: [],
      popup: undefined,
      active: false
    }
    this.search = this.search.bind(this);
    this.searchResult = this.searchResult.bind(this);
    this.showOnMap = this.showOnMap.bind(this);
    this.endSearch = this.endSearch.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
    this.loadArt=this.loadArt.bind(this);
  }

  search(e) {
    this.setState({query: e.target.value}) 
    let res = searchHelper(e,this.props.artworks); 
    this.setState({input: res, active: false}) 
  }


  submitSearch(e){
     
  }

  showOnMap(e){
    this.props.loadOnMap(e.target.id);
    this.setState({query: '', input: [], active: true})
  }

  endSearch(){
    this.props.loadOnMap([]);
    this.setState({query: '', input: [], active: false})
  }

  loadArt(e,art){
    this.setState({popup: art})
  }


  searchResult(elem,i){
    let keys = Object.keys(elem);
    return (
        <div key={i}>
          {keys.map((key,i)=>{
            return (<MarkerPopup key={key} art={elem} handler={this.loadArt} />)
                })
              }
        </div>
      )
  }


  render () {
    let {input} = this.state;
    let {query} = this.state;
    let {active} = this.state;
    return (
      <div>
        <SearchField goBack={this.endSearch} query={query} active={active} handler={this.search}/>
        <div className="search-result" onClick={this.showOnMap}>
          {input.map(this.searchResult)}  
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

