let ViewSubscribersController = function($state, $scope, SubscriberService) {
  
  // set view model to this object
  let vm = this;

  // connect data to scope of the controller through view model
  vm.subscribers = [];
  vm.clicked     = clicked;

  activate();

  function activate () {
    console.log('fetch');
    SubscriberService.getAllSubscribers().then( (response)=> {
      console.log('subscribers have been fetched');
      vm.subscribers = response.data.results;
    });
  }

  function clicked (sub) {
    console.log('clicked', sub.firstName);
  }

};

ViewSubscribersController.$inject = ['$state', '$scope', 'SubscriberService'];

export default ViewSubscribersController;