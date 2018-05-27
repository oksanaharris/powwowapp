import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addCommentAction} from '../../actions/comments.js';


class AddComment extends Component {
  constructor(props){
    super(props);

    this.state = {
      comment: '',
      imageData: '',
      hasImage: 'hidden'
    }

    this.closeOnClickOutside = this.closeOnClickOutside.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.selectImage = this.selectImage.bind(this);
    this.addComment = this.addComment.bind(this);
  }


  closeOnClickOutside(e){
    if(e.target.className.indexOf('commentModal') > -1){
      this.props.closeCommentForm();
      this.setState({
        comment: '',
        imageData: '',
        hasImage: 'hidden'
      });
    }
  }

  handleTextChange(e) {
    // let name = e.target.name;
    let value = e.target.value;
    this.setState({comment: value});
  }


  selectImage(e){
    console.log('running upload image method on IndArtworkView');
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {

    // handle pressing Cancel - ?
      this.setState({
         imageData: reader.result,
         hasImage: 'visible'
      });

      // maybe need to disable the post button until this finishes loading
      // need to add the "x" button to image to delete it without sumitting comment
      // what if you want to add multiple images ... OOOMMMGGGG......
    }

    if(file){
      reader.readAsDataURL(file);
    }
   }


  addComment(e){
    e.preventDefault();

    // can we always send a large file back to our own comment post api??
    // or does this also need to be buffered???
    let newComment = {
      artwork_id: this.props.artworkId,
      user_id: this.props.userId,
      body: this.state.comment,
      imageData: this.state.imageData,
    }

    console.log('this is our new comment', newComment);

    this.props.addComment(newComment);
    this.props.closeCommentForm();
    this.setState({
      comment: '',
      imageData: '',
      hasImage: 'hidden'
    });
    // this.props.history.push('/community');
  }

  // need an input for comment text that wraps and expands up to a certain point
  // and then scrolls

  render() {
    return (
      <div className="commentModal" style={{visibility: this.props.shown}} onClick={this.closeOnClickOutside}>

        <form onSubmit={this.addComment.bind(this)} className="comment-form-cotainer">
                    <div className="add-comment-close-input">
              <button type="button" className="add-comment-cancelButton" onClick={this.props.closeCommentForm}>x</button>
            </div>
          <div className="comment-input">

            <div className="comment-addphoto-icon">
              <label htmlFor="files" className="comment-addphoto-icon-label"></label>
              <input id="files" className="comment-addphoto-icon-input" type="file" accept="image/*" onChange={this.selectImage}></input>

            </div>
            <div className="comment-addphoto-thumbnail-div" style={{visibility:this.state.hasImage}}>
              <img className="comment-addphoto-thumbnail-img" src={this.state.imageData}></img>
            </div>
            <input type="text" className="comment-input-box" name="comment" value={this.state.comment} onChange={this.handleTextChange} />
            <button type="submit" className="add-comment-saveButton">Post</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    addCommentVisibility: state.addCommentVisibility
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (commentObj) => {
      dispatch(addCommentAction(commentObj));
    }
  }
}

AddComment = connect(
  mapStateToProps,
  mapDispatchToProps
  )(AddComment);

export default AddComment;

