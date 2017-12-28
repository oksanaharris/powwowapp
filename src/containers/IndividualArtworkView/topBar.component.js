import React, {Component} from 'react';
import {InteractionButton} from '../../components/InteractionButton';
import {BrowserHistory} from 'react-router';

let backArrowImg = '/assets/back_arrow.png';

class BackButton extends Component {
  static contextTypes = {
    router: () => true, // replace with PropTypes.object if you use them
  }

  render() {
    return (
      <div className="artworkview-topbar-back-container" onClick={this.context.router.history.goBack} >
        <img className="artworkview-topbar-back-arrow" src={backArrowImg} />
        <p className="artworkview-topbar-back-word">Back</p>
      </div>
    )
  }
}

export const TopBar = ({star, handleStarClick}) => {
  return (
    <div className="artworkview-topbar-container">
      <BackButton />
      <InteractionButton imgClass="artworkview-topbar-interaction" src={star} handleClick={handleStarClick} />
    </div>
  );
}