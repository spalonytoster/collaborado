// jshint esversion: 6

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import angularMaterial from 'angular-material';
import angularAria from 'angular-aria';
import angularAnimate from 'angular-animate';
import { name as Message } from './message/message.module';
import { name as NewMessage } from './new-message/new-message.module';

const name = 'live-chat';

export default angular.module(name, [
  angularMeteor,
  angularMaterial,
  angularAria,
  angularAnimate,
  Message,
  NewMessage
]);
