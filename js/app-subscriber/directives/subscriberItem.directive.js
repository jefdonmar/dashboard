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
        <td>Edit</td>
        <td
          ng-click="vm.deleteSub(sub)"
        >
            Delete
          </td>
        <td>Yes or No</td>
      </tr>
    `,
    link: function (scope, element, attrs) {
      // element.find()on('click', function() {
      //   element[0].childNodes[9]
      //   console.log('subscriber clicked');
      // });
    }
  };

};

subscriberItem.$inject = ['SubscriberService'];

export default subscriberItem;