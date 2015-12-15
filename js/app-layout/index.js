import angular from 'angular';

import HomeController from './controllers/home.controller';
import AboutController from './controllers/about.controller';



angular
  .module('app.layout', [])
  .controller('HomeController', HomeController)
  .controller('AboutController', AboutController)
;