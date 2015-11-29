// Import Chart JS - move to another file later
import Chart from 'chart.js';
console.dir(Chart);

// Import angular
import angular from 'angular';


// Import other app modules
import './app-core/index';
import './app-layout/index';


// Instantiate angular module
angular
  .module('app', ['app.core', 'app.layout'])
;





