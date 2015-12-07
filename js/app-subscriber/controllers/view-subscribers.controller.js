let ViewSubscribersController = function($state, $scope, SubscriberService) {
  
  // set view model to this object
  let vm = this;

  // connect data to scope of the controller through view model
  vm.subscribers = [];
  vm.clicked     = clicked;

  $scope.sortType = 'email';

  function selectSubjects (subject_name) {
    SubscriberService.Subscriber(subject_name).then((res) => {
      console.log(res);
    });
  }


  activate();

  function activate () {
    SubscriberService.getAllSubscribers().then( (response)=> {
      vm.subscribers = response.data.subscriber;
      console.log(vm.subscribers);
    });
  }

  function clicked (sub) {
    console.log('clicked', sub.email);
  }

};

ViewSubscribersController.$inject = ['$state', '$scope', 'SubscriberService'];

export default ViewSubscribersController;