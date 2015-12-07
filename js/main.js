// Import angular
import angular from 'angular';

// Import other app modules
import './app-core/index';
import './app-layout/index';
import './app-subscriber/index';
import './app-user/index';
import './app-content/index';
import './app-dashboard/index';

// Instantiate angular module
angular
  .module('app', ['app.core', 'app.layout', 'app.subscriber', 'app.user', 'app.content', 'app.dashboard'])
  .run(function ($rootScope, UserService) {
    $rootScope.$on('$stateChangeSuccess', function() {
      console.log('state change');
      UserService.setHeaders();
    });
  })
;





