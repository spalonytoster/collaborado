// jshint esversion: 6
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import angularAria from 'angular-aria';
import angularMaterial from 'angular-material';
import { name as TabGeneral } from './tab-general/tab-general.module';
import { name as AvatarUpload } from './avatar-upload/avatar-upload.module';
import { name as ProfileBio } from './profile-bio/profile-bio.module';

const name = 'applicationSettings';

export default angular.module(name, [
  angularMeteor,
  angularAria,
  angularMaterial,
  TabGeneral,
  AvatarUpload,
  ProfileBio
]);
