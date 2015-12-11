import angular from 'angular';

import LoginController from './controllers/login.controller';
import SignupController from './controllers/signup.controller';
import WelcomeController from './controllers/welcome.controller';
import UserService from './services/user.service';
import ProfileController from './controllers/user-profile.controller';


angular
  .module('app.user', [])
  .controller('LoginController', LoginController)
  .controller('SignupController', SignupController)
  .controller('WelcomeController', WelcomeController)
  .controller('ProfileController', ProfileController)
  .service('UserService', UserService)
;