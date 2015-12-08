import angular from 'angular';

// Import Chart JS - move to another file later
// import Chart from 'angular-chart.js';
// console.dir(Chart);

// CONTROLLERS
import MainDashboardController from './controllers/main-dashboard.controller';

// SERVICES
import DashboardService from './services/dashboard.service';

angular
  .module('app.dashboard', [])
  .controller('MainDashboardController', MainDashboardController)
  .service('DashboardService', DashboardService)
;
