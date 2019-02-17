import axios from 'axios';

export function getPosts(userId) {
  return axios.get('https://jsonplaceholder.typicode.com/posts');
}
