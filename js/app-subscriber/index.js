import angular from 'angular';

import AddSubscriberController from './controllers/add-subscriber.controller';

angular
  .module('app.subscriber', [])
  .controller('AddSubscriberController', AddSubscriberController)
;