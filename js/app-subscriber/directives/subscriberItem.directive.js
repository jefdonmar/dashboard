let subscriberItem = function(SubscriberService) {
  
  return {

    restrict: 'EA', // Restrict to element only
    replace: true, // Replace as opposed to inserting into
    scope: {
      sub: '='
    },
    controller: 'ViewSubscribersController as vm',
    template: `
      <div class="subscriber-block">
        <p>Name: {{ sub.firstName }} {{ sub.lastName }}</p>
        <p>Email: {{ sub.email }}</p>
      </div>
    `,
    // link: function (scope, element, attrs) {
    // }
  };

};

subscriberItem.$inject = ['SubscriberService'];

export default subscriberItem;