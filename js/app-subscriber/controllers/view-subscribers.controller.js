let ViewSubscribersController = function($state, $scope, SubscriberService) {
  
  // set view model to this object
  let vm = this;

  // connect data to scope of the controller through view model
  vm.subscribers = [];

<<<<<<< HEAD
  $scope.sortType = 'email';

  function selectSubjects (subject_name) {
    SubscriberService.Subscriber(subject_name).then((res) => {
      console.log(res);
    });
  }

=======
  $scope.sortType = 'id';
  $scope.sortReverse = false;
>>>>>>> 9d2e6c7d67b5047e43f898f453a47e0546146d33

  activate();

  function activate () {
<<<<<<< HEAD
    SubscriberService.getAllSubscribers().then( (response)=> {
      vm.subscribers = response.data.subscriber;
      console.log(vm.subscribers);
    });
  }

  function clicked (sub) {
    console.log('clicked', sub.email);
=======
    if (vm.subscribers.length === 0) {
      SubscriberService.getAllSubscribers().then( (response)=> {
        vm.subscribers = response.data.subscriber;
        console.log('Subscribers', vm.subscribers);
      });
    }
>>>>>>> 9d2e6c7d67b5047e43f898f453a47e0546146d33
  }

};

ViewSubscribersController.$inject = ['$state', '$scope', 'SubscriberService'];

export default ViewSubscribersController;