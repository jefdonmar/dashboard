let subscriberSubjects = function(SubscriberService) {
  
  return {

    restrict: 'A', // Restrict to attribute only
    replace: true, // Replace as opposed to inserting into
    scope: {
      subject: '='
    },
    // transclude: true,
    // controller: 'ViewSubscribersController as vm', // Not needed?
    template: `
      <tr>
        <td>{{ subject }}</td>
        <td>
          <input 
            type="checkbox"
            ng-click="subject = true"
            // ng-model="subject.subject_names"
          >
        </td>
      </tr>
    `,
    // link: function (scope, element, attrs) {
    //   scope.sortType = 'First Name';
    // }
  };

};

subscriberSubjects.$inject = ['SubscriberService'];

export default subscriberSubjects;