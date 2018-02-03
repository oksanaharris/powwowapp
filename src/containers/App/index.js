import React, { Component } from 'react';

import {Header} from '../../components/Header';
import Footer from '../../components/Footer';

import {Main} from '../../components/Main';


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
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
