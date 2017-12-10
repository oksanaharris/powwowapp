import React, { Component } from 'react';

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
      <div className="App">
        <div className="pageTitle navElement">POWWOW APP</div>
      </div>
    );
  }
}

export default App;
