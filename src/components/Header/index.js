import React, {Component} from 'react';
import {connect} from 'react-redux';
import {MyProfileMenu} from './myprofile.js';
import {CheeseburgerMenu} from './cheeseburgerMenu.js';

export class Header extends Component {

  constructor(props){
    super(props);
    this.state = {
      profileMenuOpened: 'hidden',
      cheeseburgerMenuOpened: 'hidden'
    };

    this.closeProfileMenu = this.closeProfileMenu.bind(this);
    this.openProfileMenu = this.openProfileMenu.bind(this);
    this.closeCheeseburgerMenu = this.closeCheeseburgerMenu.bind(this);
    this.openCheeseburgerMenu = this.openCheeseburgerMenu.bind(this);
    this.profileMenuClick = this.profileMenuClick.bind(this);
    this.cheeseburgerMenuClick = this.cheeseburgerMenuClick.bind(this);
  }

  closeProfileMenu(){
    this.setState({
      profileMenuOpened: 'hidden'
    });
  }

  openProfileMenu(){
    this.setState({
      profileMenuOpened: 'visible'
    });
  }

  closeCheeseburgerMenu(){
    console.log('running close cheeseburter');

    this.setState({
      cheeseburgerMenuOpened: 'hidden'
    });
  }

  openCheeseburgerMenu(){
    console.log('running open cheeseburter');

    this.setState({
      cheeseburgerMenuOpened: 'visible'
    });
  }

  profileMenuClick(){
    if(this.state.profileMenuOpened === 'hidden'){
      this.openProfileMenu();
    } else {
      this.closeProfileMenu();
    }
  }

  cheeseburgerMenuClick(){
    console.log('cheeseburger menu click running');
    console.log('state', this.state.cheeseburgerMenuOpened);

    if(this.state.cheeseburgerMenuOpened === 'hidden'){
      this.openCheeseburgerMenu();
    } else {
      this.closeCheeseburgerMenu();
    }
  }

  render(){
    return(
      <div className="header-menu-container">
        <div className="header-menu">
          <div className="header-section header-profile-section">
            <img src="http://bit.ly/2AN2hqu"  alt="profile"  className="header-img header-profile-icon" onClick={this.profileMenuClick} />
          </div>
          <div className="header-section header-logo-section">
            <div className="header-logo-title">POW!WOW!</div>
          </div>
          <div className="header-section header-menu-section">
            <img src="http://bit.ly/2At5KNM" alt="menu" className="header-img header-menu-icon" onClick={this.cheeseburgerMenuClick} />
          </div>
        </div>
        <MyProfileMenu shown={this.state.profileMenuOpened} openMenu={this.openProfileMenu} closeMenu={this.closeProfileMenu}/>
        <CheeseburgerMenu shown={this.state.cheeseburgerMenuOpened} openMenu={this.openCheeseburgerMenu} closeMenu={this.closeCheeseburgerMenu} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // comments: state.comments
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    // loadComments: () => {
    //   dispatch(loadComments());
    };
    // removeStar: (id) => {
    //   dispatch(removeStarAction(id));
    // },
    // addStar: (artwork_id, user_id) => {
    //   dispatch(addStarAction(artwork_id, user_id));
    // },
    // setToPreviousStage: (id) => {
    //   dispatch(previousStageAction(id));
    // },
    // deleteTask: (id) => {
    //   dispatch(deleteTaskAction(id));
    // }
}


Header = connect(
  mapStateToProps,
  mapDispatchToProps,
  )(Header);



export default Header;