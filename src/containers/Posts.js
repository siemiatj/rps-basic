import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPostsData } from '../redux/actions';

class Posts extends Component {
  componentDidMount() {
    const { getPostsData } = this.props;

    getPostsData();
  }

  render() {
    const { posts } = this.props;

    return (
      <div className="app-content">
        <h3>Posts</h3>
        <div className="posts-list">
          {posts.map(post => (
            <div key={`post-${post.id}`}>
              <h6>{post.title}</h6>
              <span>{post.body}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ plugins }) => {
  return {
    posts: plugins.example.posts,
  };
};

export default connect(
  mapStateToProps,
  { getPostsData }
)(Posts);
