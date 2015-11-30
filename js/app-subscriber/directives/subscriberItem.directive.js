let subscriberItem = function(SubscriberService) {
  
  return {

    restrict: 'EA', // Restrict to element only
    replace: true, // Replace as opposed to inserting into
    scope: {
      sub: '='
    },
    // transclude: true,
    // controller: 'ViewSubscribersController as vm', // Not needed?
    template: `
      <tr>
        <td>{{ sub.firstName }}</td>
        <td>{{ sub.lastName }}</td>
        <td>{{ sub.email }}</td>
      </tr>
    `,
    // link: function (scope, element, attrs) {
    // }
  };

};

subscriberItem.$inject = ['SubscriberService'];

export default subscriberItem;