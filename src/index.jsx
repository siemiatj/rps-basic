import App from './components/App';
import Start from './components/Start';
import Cats from './containers/Cats';
import Posts from './containers/Posts';
import reducer from './redux/reducers';

const api = {
  routes: [
    {
      path: '/plugins',
      component: App,
      indexRoute: {
        component: Start,
      },
      childRoutes: [
        {
          path: '/plugins/cats',
          component: Cats,
        },
        {
          path: '/plugins/posts',
          component: Posts,
        },
      ],
    },
  ],
  reducers: {
    name: 'example',
    reducer,
  },
};

export default api;
