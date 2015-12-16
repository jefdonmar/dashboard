import $ from 'jquery';
import 'foundation';
import moment from 'moment';
console.log(moment);

//Initialize Foundation
$(document).foundation();


// Import angular
import angular from 'angular';

// Import browserify-shim for nav bar things
// import $ from 'jquery';
// import 'foundation';

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
  .run(function ($rootScope, UserService, $state) {
    $rootScope.$on('$stateChangeSuccess', function() {
      console.log('state change');
      UserService.setHeaders();
      if ( $state.is('root.signup') || $state.is('root.welcome')  ) {
        console.log('Hello');  
      } else {
        UserService.checkAuth();
      }
    });

    $rootScope.$on('$viewContentLoaded', function () {
      $(document).foundation();
    });

  })
;





