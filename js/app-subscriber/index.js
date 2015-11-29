import angular from 'angular';

// CONTROLLERS
import AddSubscriberController from './controllers/add-subscriber.controller';
import ViewSubscribersController from './controllers/view-subscribers.controller';

// DIRECTIVES
import subscriberItem from './directives/subscriberItem.directive';

// SERVICES
import SubscriberService from './services/subscriber.service';

angular
  .module('app.subscriber', [])
  .controller('AddSubscriberController', AddSubscriberController)
  .controller('ViewSubscribersController', ViewSubscribersController)
  .directive('subscriberItem', subscriberItem)
  .service('SubscriberService', SubscriberService)
;