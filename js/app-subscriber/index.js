import angular from 'angular';
import 'checklist-model';

// CONTROLLERS
import AddSubscriberController from './controllers/add-subscriber.controller';
import ViewSubscribersController from './controllers/view-subscribers.controller';
import SubscriberRowController from './controllers/subscriber-row-directive.controller';
import EditSubscriberController from './controllers/edit-subscriber.controller';
import SingleSubscriberController from './controllers/single-subscriber.controller';
import BuildSegmentController from './controllers/build-segment.controller';

// DIRECTIVES
import subscriberItem from './directives/subscriberItem.directive';

// SERVICES
import SubscriberService from './services/subscriber.service';

angular
  .module('app.subscriber', ['checklist-model'])
  .controller('AddSubscriberController', AddSubscriberController)
  .controller('ViewSubscribersController', ViewSubscribersController)
  .controller('SubscriberRowController', SubscriberRowController)
  .controller('EditSubscriberController', EditSubscriberController)
  .controller('SingleSubscriberController', SingleSubscriberController)
  .controller('BuildSegmentController', BuildSegmentController)
  .directive('subscriberItem', subscriberItem)
  .service('SubscriberService', SubscriberService)
;