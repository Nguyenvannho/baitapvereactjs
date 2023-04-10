import axios from 'axios';
import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
} from './action';

export const getPostsRequest = () => ({
  type: GET_POSTS_REQUEST,
});

export const getPostsSuccess = (posts) => ({
  type: GET_POSTS_SUCCESS,
  payload: posts,
});

export const getPostsFailure = (error) => ({
  type: GET_POSTS_FAILURE,
  payload: error,
});

export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(getPostsRequest());
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const posts = response.data;
      dispatch(getPostsSuccess(posts));
    } catch (error) {
      const errorMessage = error.message;
      dispatch(getPostsFailure(errorMessage));
    }
  };
};
