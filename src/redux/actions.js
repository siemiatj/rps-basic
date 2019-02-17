import { getPosts } from '../api';

/* ACTION CREATORS */
export const getPostsData = () => dispatch => {
  return getPosts().then(({ data }) => {
    dispatch({
      type: 'GET_POSTS_SUCCESS',
      payload: data,
    });
  });
};
