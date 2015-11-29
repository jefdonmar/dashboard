import angular from 'angular';

import AddSubscriberController from './controllers/add-subscriber.controller';
import SubscriberService from './services/subscriber.service';

angular
  .module('app.subscriber', [])
  .controller('AddSubscriberController', AddSubscriberController)
  .service('SubscriberService', SubscriberService)
;