let subscriberItem = function(SubscriberService) {
  
  return {

    restrict: 'A', // Restrict to attribute only
    replace: true, // Replace as opposed to inserting into
    scope: {
      sub: '='
    },
    // transclude: true,
    controller: 'SubscriberRowController as vm', // Not needed?
    template: `
      <tr>
        <td>{{ sub.id }}</td>
        <td>{{ sub.email }}</td>
        <td>{{ sub.subject_names }}</td>
        <td ng-click="vm.viewSub(sub)">
          <a>View</a>
        </td>
        <td ng-click="vm.editSub(sub)">
          <a>Edit</a>
        </td>
        <td ng-click="vm.deleteSub(sub)">
          <a>Delete</a>
        </td>
        <td>
          <span>
            {{ sub.subject_names.includes('Baseball') ? "Yes" : "" }}
          </span>
        </td>
        <td>
          <span>
            {{ sub.subject_names.includes('Basketball') ? "Yes" : "" }}
          </span>
        </td>
        <td>
          <span>
            {{ sub.subject_names.includes('Football') ? "Yes" : "" }}
          </span>
        </td>
        <td>
          <span>
            {{ sub.subject_names.includes('Hockey') ? "Yes" : "" }}
          </span>
        </td>
        <td>
          <span>
            {{ sub.subject_names.includes('Soccer') ? "Yes" : "" }}
          </span>
        </td>
      </tr>
    `,
    link: function (scope, element, attrs) {
    }
  };

};

subscriberItem.$inject = ['SubscriberService'];

export default subscriberItem;