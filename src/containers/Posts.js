import React from 'react';
import { connect } from 'react-redux';

import { getPostsData } from '../redux/actions';

const Posts = ({ cats }) => (
  <div className="app-content">
    Posts
    <ul>
      {cats.map(cat => (
        <li key={`cat-${cat}`}>{cat}</li>
      ))}
    </ul>
  </div>
);

const mapStateToProps = ({ plugins }) => {
  return {
    cats: plugins.example.cats,
  };
};

export default connect(mapStateToProps)(Posts);
