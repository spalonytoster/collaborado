// jshint esversion: 6

import angular from 'angular';
import angularMeteor from 'angular-meteor';


import { name as Dashboard } from './dashboard/dashboard.module';
import { name as Sidebar } from './sidebar/sidebar.module';
import { name as Login } from './accounts/login/login.module';
import { name as Register } from './accounts/register/register.module';
import { name as Posts } from './dashboard/posts/posts.module';
import { name as LiveChat } from './live-chat/live-chat.module';
import { name as Auth } from './accounts/auth/auth.module';

const name = 'components';

export default angular.module(name, [
  angularMeteor,
  Dashboard,
  Sidebar,
  Login,
  Register,
  Posts,
  LiveChat,
  Auth
]);
