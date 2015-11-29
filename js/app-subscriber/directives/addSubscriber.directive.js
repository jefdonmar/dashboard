let addSubscriber = function(SubscriberService) {
  
  return {

    restrict: 'E', // Restrict to element only
    replace: true, // Replace as opposed to inserting into
    scope: {
      sub: '='
    },


  };

};

addSubscriber.$inject = [''];

export default addSubscriber;