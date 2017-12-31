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

export const TopBarNoStar = () => {
  return (
    <div className="artistview-topbar-container">
      <BackButton />
    </div>
  );
}