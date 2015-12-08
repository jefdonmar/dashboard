import angular from 'angular';


import HomeController from './controllers/home.controller';



angular
  .module('app.layout', ['mm.foundation'])
  .controller('HomeController', HomeController)
;