import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';

import config from './config';
import HEROKU from './heroku.constant';

angular
  .module('app.core', ['ui.router', 'ngCookies'])
  .config(config)
  .constant('HEROKU', HEROKU)
;