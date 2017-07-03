import angular from 'angular';
import Home from './home/home';
import Contact from './contact/contact';
import Photos from './photos/photos';
import Drive from './drive/drive';

let componentModule = angular.module('app.components', [
  Home,
  Contact,
  Photos,
  Drive,
])

.name;

export default componentModule;
