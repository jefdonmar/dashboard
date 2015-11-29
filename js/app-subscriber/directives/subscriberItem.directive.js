let subscriberItem = function(SubscriberService) {
  
  return {

    restrict: 'EA', // Restrict to element only
    replace: true, // Replace as opposed to inserting into
    scope: {
      sub: '='
    },
    templateUrl: 'templates/app-subscriber/view-subscribers.tpl.html',
    controller: 'ViewSubscribersController as vm',
    link: function (scope, element, attrs) {
      element.on('click', function () {
        console.log('subscriber was clicked');
      });
    }
  };

};

subscriberItem.$inject = ['SubscriberService'];

export default subscriberItem;