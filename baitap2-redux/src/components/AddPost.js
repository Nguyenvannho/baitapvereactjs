import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { addPost } from '../redux/actions';


class AddPost extends Component {
    render() {
      return (
        <div>
          <h2>New Post</h2>
          <form>
            <div>
              <label>Title: </label>
              <br />
              <input type="text" />
            </div>
            <br />
            <div>
              <label>Content: </label>
              <br />
              <textarea rows="5" cols="28" />
            </div>
            <br />
            <button type="submit">Add</button>
          </form>
        </div>
      )
    }
  }
  handleAddPost = (e) => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const content = e.target.elements.content.value;
    const data = {
      title,
      body: content,
      userId: 1,
    }
    axios.post('https://jsonplaceholder.typicode.com/posts', data)
      .then(response => {
        alert(`New post added with id ${response.data.id}`);
        this.props.history.push('/');
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  
  export default AddPost;
  