import angular from 'angular';
import 'angular-ui-router';

import config from './config';
import HEROKU from './heroku.constant';

angular
  .module('app.core', ['ui.router'])
  .config(config)
  .constant('HEROKU', HEROKU)
;