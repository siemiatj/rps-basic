import React from 'react';
import { connect } from 'react-redux';

const Cats = ({ cats }) => (
  <div className="app-content">
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

export default connect(mapStateToProps)(Cats);
