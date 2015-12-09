import angular from 'angular';
import 'checklist-model';
// import 'angular-ui-grid' from 'node_modules/angular-ui-grid/ui-grid.min.css';
import 'angular-ui-grid';

// CONTROLLERS
import AddSubscriberController from './controllers/add-subscriber.controller';
import ViewSubscribersController from './controllers/view-subscribers.controller';
import SubscriberRowController from './controllers/subscriber-row-directive.controller';
import EditSubscriberController from './controllers/edit-subscriber.controller';
import SingleSubscriberController from './controllers/single-subscriber.controller';

// DIRECTIVES
import subscriberItem from './directives/subscriberItem.directive';

// SERVICES
import SubscriberService from './services/subscriber.service';

angular
  .module('app.subscriber', ['checklist-model', 'ui.grid'])
  .controller('AddSubscriberController', AddSubscriberController)
  .controller('ViewSubscribersController', ViewSubscribersController)
  .controller('SubscriberRowController', SubscriberRowController)
  .controller('EditSubscriberController', EditSubscriberController)
  .controller('SingleSubscriberController', SingleSubscriberController)
  .directive('subscriberItem', subscriberItem)
  .service('SubscriberService', SubscriberService)
;