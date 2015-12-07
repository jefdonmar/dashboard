import angular from 'angular';

import LoginController from './controllers/login.controller';
import SignupController from './controllers/signup.controller';
import WelcomeController from './controllers/welcome.controller';
import UserService from './services/user.service';


angular
  .module('app.user', [])
  .controller('LoginController', LoginController)
  .controller('SignupController', SignupController)
  .controller('WelcomeController', WelcomeController)
  .service('UserService', UserService)
;