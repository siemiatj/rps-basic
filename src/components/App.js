import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/styles.css';

const App = ({ children }) => (
  <div className="container cats-posts-application">
    <div className="row">
      <div className="col-12">
        <header>
          <ul className="nav">
            <li className="nav-item">
              <Link to={'/'}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to={'/plugins/cats'}>Cats</Link>
            </li>
            <li className="nav-item">
              <Link to={'/plugins/posts'}>Posts</Link>
            </li>
          </ul>
        </header>
      </div>
    </div>
    <div className="row">
      <div className="col-12">{children}</div>
    </div>
  </div>
);

export default App;
