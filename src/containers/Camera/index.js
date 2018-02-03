import React, { Component } from 'react';

export default class CameraComponent extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <input type="file" accept="image/*" capture />
<input type="file" accept="image/*" capture="user" />
<input type="file" accept="image/*" capture="environment" />

      </div>
    );
  }
}