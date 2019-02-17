import { getPosts } from '../api';

/* ACTION CREATORS */
export const getPostsData = () => dispatch => {
  return getPosts().then(response => {
    dispatch({
      type: 'GET_POSTS_SUCCESS',
      payload: response,
    });
  });
};
