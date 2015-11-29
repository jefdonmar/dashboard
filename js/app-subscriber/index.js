import angular from 'angular';

import AddSubscriberController from './controllers/add-subcriber.controller';

angular
  .module('app.subscriber', [])
  .controller('AddSubscriberController', AddSubscriberController)
;