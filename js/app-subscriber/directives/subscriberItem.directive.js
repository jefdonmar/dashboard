let subscriberItem = function(SubscriberService) {
  
  return {

    restrict: 'A', // Restrict to attribute only
    replace: true, // Replace as opposed to inserting into
    scope: {
      sub: '='
    },
    // transclude: true,
    // controller: 'ViewSubscribersController as vm', // Not needed?
    template: `
      <tr>
        <td>{{ sub.email }}</td>
        <td>{{ sub.subject_names }}</td>
        <td>{{ sub.subject_names[0] }}</td>
      </tr>
    `,
    link: function (scope, element, attrs) {
      scope.sortType = 'First Name';
    }
  };

};

subscriberItem.$inject = ['SubscriberService'];

export default subscriberItem;