import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=vanquish'

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CLEAR_POSTS = 'CLEAR_POSTS';
export const CLEAR_POST = 'CLEAR_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

export function fetchPosts() {
  const fullUrl = `${ROOT_URL}/posts${API_KEY}`;
  const request = axios.get(fullUrl);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchPost(id) {
  const fullUrl = `${ROOT_URL}/posts/${id + API_KEY}`;
  const request = axios.get(fullUrl);

  return{
    type: FETCH_POST,
    payload: request
  }
}

export function clearPosts() {
  return {
    type: CLEAR_POSTS,
    payload: null
  }
}

export function clearPost() {
  return {
    type: CLEAR_POST,
    payload: null
  }
}

export function createPost(props) {
  const fullUrl = `${ROOT_URL}/posts${API_KEY}`;
  const request = axios.post(fullUrl, props);

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function deletePost(id) {
  const fullUrl = `${ROOT_URL}/posts/${id + API_KEY}`;
  const request = axios.delete(fullUrl);

  return {
    type: DELETE_POST,
    payload: request
  }
}
