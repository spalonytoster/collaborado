// jshint esversion: 6

import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { name as Dashboard } from './dashboard/dashboard.module';
import { name as Sidebar } from './sidebar/sidebar.module';
<<<<<<< HEAD
import { name as Login } from './login/login.module';
=======
import { name as Posts } from './dashboard/posts/posts.module';
>>>>>>> origin

const name = 'components';

export default angular.module(name, [
  angularMeteor,
  Dashboard,
  Sidebar,
<<<<<<< HEAD
  Login
=======
  Posts
>>>>>>> origin
]);
