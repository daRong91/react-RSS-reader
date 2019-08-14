import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import BookIcon from '@material-ui/icons/Book';
import PortraitIcon from '@material-ui/icons/Portrait';
import DiscoverIcon from '@material-ui/icons/Explore';
import Home from './page/Home';
import Order from './page/Order';
import Profile from './page/Profile';
import Discover from './page/Discover';
import App from './page/App';

export default [
  {
    key: 'app',
    path: '/',
    component: App,
  },
  {
    key: 'home',
    path: '/home',
    component: Home,
    icon: <HomeIcon />,
    label: '首页',
    type: 'homePage',
  },
  {
    key: 'order',
    path: '/order',
    component: Order,
    icon: <BookIcon />,
    label: '订单',
    type: 'homePage',
  },
  {
    key: 'profile',
    path: '/profile',
    component: Profile,
    icon: <PortraitIcon />,
    label: '我的',
    type: 'homePage',
  },
  {
    key: 'discover',
    path: '/discover',
    component: Discover,
    icon: <DiscoverIcon />,
    label: '发现',
    type: 'homePage',
  },
];