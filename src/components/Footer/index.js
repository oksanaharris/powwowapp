import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends Component{
  constructor(props){
    super(props);
    this.state = {
      // showCamera: 'hidden'
      file: '',
      url: ''
    };

    this.uploadImage = this.uploadImage.bind(this);
  }

  // openCamera(){
  //   this.setState({
  //     showCamera: 'visible'
  //   });
  // }

  uploadImage(e){
   e.preventDefault();
   let reader = new FileReader();
   // let file = e.target.files[0];

   reader.onloadend = () => {
    console.log(e.target.file);
    let file = e.target.files[0];

    this.setState({
       file: file,
       url: reader.result
    });

     console.log('state file', this.state.file);
     console.log('state url', this.state.url);
   }

   // if(file){
   //   reader.readAsDataURL(file);
   // }

 }

  render(){
    return(
      <div className="footer-menu">
        <div className="footer-menu-row footer-menu-buttons-row">
          <div className="footer-menu-section gallery-section">
            <Link to='/artgallery'>
              <img src="/assets/gallery_icon.png" alt="gallery" className="menu-img menu-gallery-img" />
              <p className="menu-header menu-gallery-header">Gallery</p>
            </Link>
          </div>
          <div className="footer-menu-section map-section">
            <Link to='/'>
              <img src="/assets/map_icon.png" alt="map" className="menu-img menu-map-img" />
              <p className="menu-header menu-map-header">Map</p>
            </Link>
          </div>
          <div className="footer-menu-section community-section">
            <Link to='/community'>
              <img src="/assets/comments_icon.png" alt="comments" className="menu-img menu-community-img" />
              <p className="menu-header menu-community-header">Community</p>
            </Link>
          </div>
          <div className="footer-menu-section artists-section">
            <Link to='/artistlist'>
              <img src="/assets/color_palette_icon.png" alt="artists" className="menu-img menu-artists-img" />
              <p className="menu-header menu-artists-header">Artists</p>
            </Link>
          </div>
        </div>

        <div className="footer-menu-row footer-menu-camera-row">
          <div className="footer-menu-section camera-section">
            <div className="camera-icon-div" >
              <label for="files" className="camera-button-label"></label>
              <input id="files" className="camera-button-input" type="file" accept="image/*" onChange={this.uploadImage}></input>
            {/*<Link to='/camera'>*/}
             {/* <img src="/assets/camera_icon.png" alt="gallery" className="menu-img menu-camera-img" />*/}
            {/*</Link>*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}