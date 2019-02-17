import React from 'react';
import { Link } from 'react-router';

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
              <Link
                to={'/plugins/cats'}
                activeStyle={{
                  textDecoration: 'none',
                  color: 'black',
                }}
              >
                Cats
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={'/plugins/posts'}
                activeStyle={{
                  textDecoration: 'none',
                  color: 'black',
                }}
              >
                Posts
              </Link>
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
