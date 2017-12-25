import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addCommentAction} from '../../actions/comments.js';


class AddComment extends Component {
  constructor(props){
    super(props);

    this.state = {
      comment: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.closeOnClickOutside = this.closeOnClickOutside.bind(this);
  }

  handleChange(e) {
    // let name = e.target.name;
    let value = e.target.value;
    this.setState({comment: value});
  }

  addComment(e){
    e.preventDefault();

    let newComment = {
      artwork_id: this.props.artworkId,
      user_id: this.props.userId,
      body: this.state.comment
    }

    this.props.addComment(newComment);
    console.log('this is our new comment', newComment);
    this.props.closeCommentForm();
    this.setState({
      comment: ''
    });
  }

  closeOnClickOutside(e){
    if(e.target.className.indexOf('commentModal') > -1){
      this.props.closeCommentForm();
      this.setState({comment: ''});
    }
  }

  render() {
    return (
      <div className="commentModal" style={{visibility: this.props.shown}} onClick={this.closeOnClickOutside}>
        <form onSubmit={this.addComment.bind(this)} className="comment-form-cotainer">
          <div className="comment-input">
            <input type="text" name="comment" value={this.state.comment} onChange={this.handleChange}/>
          </div>

          <div className="addcomment-buttons">
            <button type="button" className="add-comment-button cancelButton" onClick={this.props.closeCommentForm}>Cancel</button>
            <button type="submit" className="add-comment-button saveButton">Save</button>
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