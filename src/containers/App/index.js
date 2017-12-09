import React, { Component } from 'react';

import OpenStreetMaps from '../OpenStreetMaps';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      addTaskModal: 'hidden'
    }

    // this.onAddClick = this.onAddClick.bind(this);
  }

  // onPlusClick(){
  //   this.setState({
  //     addTaskModal: 'visible'
  //   })
  // }

  // onAddClick(){
  //   this.setState({
  //     addTaskModal: 'hidden'
  //   })
  // }

  render() {
    return (
      <div id="container">
        <OpenStreetMaps/>
      </div>
    );
  }
}

export default App;
