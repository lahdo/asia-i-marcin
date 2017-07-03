import angular from 'angular';
import Navbar from './navbar/navbar';
import Names from './names/names';

let commonModule = angular.module('app.common', [
  Navbar,
  Names,
])

.name;

export default commonModule;
