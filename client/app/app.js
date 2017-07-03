import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';
import './theme.css';
import './bootstrap.css';
import AngularBootstrap from 'angular-ui-bootstrap';
import ngMap from 'ngmap';
import angularGrid from 'angulargrid';

angular.module('app', [
  uiRouter,
  ngMap,
  angularGrid,
  AngularBootstrap,
  Common,
  Components,
])
  .config(($locationProvider,$qProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
      $qProvider.errorOnUnhandledRejections(false);
  })

  .component('app', AppComponent);
