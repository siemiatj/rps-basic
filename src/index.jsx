import React from 'react';
import { Route } from 'react-router-dom';
import App from './components/App';
import Start from './components/Start';
import Cats from './containers/Cats';
import Posts from './containers/Posts';
import reducer from './redux/reducers';

const api = {
  routes: (
    <App>
      <Route exact path='/plugins' component={Start} />
      <Route path='/plugins/cats' component={Cats} />
      <Route path='/plugins/posts' component={Posts} />
    </App>
  ),
  reducers: {
    name: 'example',
    reducer,
  },
};

export default api;
