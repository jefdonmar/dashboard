import angular from 'angular';

// CONTROLLERS
import MainDashboardController from './controllers/main-dashboard.controller';

// SERVICES
import DashboardService from './services/dashboard.service';

angular
  .module('app.dashboard', [])
  .controller('MainDashboardController', MainDashboardController)
  .service('DashboardService', DashboardService)
;
