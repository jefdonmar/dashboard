import angular from 'angular';


import HomeController from './controllers/home.controller';
import AboutUsController from './controllers/about-us.controller';



angular
  .module('app.layout', [])
  .controller('HomeController', HomeController)
  .controller('AboutUsController', AboutUsController)
;