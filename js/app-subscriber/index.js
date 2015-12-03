import angular from 'angular';
import 'checklist-model';

// CONTROLLERS
import AddSubscriberController from './controllers/add-subscriber.controller';
import ViewSubscribersController from './controllers/view-subscribers.controller';
import SubscriberRowController from './controllers/subscriber-row-directive.controller';

// DIRECTIVES
import subscriberItem from './directives/subscriberItem.directive';
import subscriberSubjects from './directives/subscriberSubjects.directive';

// SERVICES
import SubscriberService from './services/subscriber.service';

angular
  .module('app.subscriber', ['checklist-model'])
  .controller('AddSubscriberController', AddSubscriberController)
  .controller('ViewSubscribersController', ViewSubscribersController)
  .controller('SubscriberRowController', SubscriberRowController)
  .directive('subscriberItem', subscriberItem)
  .directive('subscriberSubjects', subscriberSubjects)
  .service('SubscriberService', SubscriberService)
;