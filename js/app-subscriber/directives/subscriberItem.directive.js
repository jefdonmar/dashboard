let subscriberItem = function(SubscriberService) {
  
  return {

    restrict: 'A', // Restrict to element only
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
        <td>
          <input 
            type="checkbox"
            ng-model="sub.Baseball"
            ng-init="checked=true"
            ng-click="changed=true">
            <span ng-if="sub.Baseball">Yes</span>
        <button class="change-button" ng-show="changed">Submit change</button>
        </td>
      </tr>
    `,
    link: function (scope, element, attrs) {
      scope.sortType = 'First Name';
    }
  };

};

subscriberItem.$inject = ['SubscriberService'];

export default subscriberItem;