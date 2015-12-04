let SingleSubscriberController = function($state, SubscriberService, $stateParams) {
  
  console.log('SingleSubscriberController');

  let vm = this;

  vm.goToEditSub = goToEditSub;

  activate ();

  function activate () {
    SubscriberService.getSingleSubscriber($stateParams.id).then( (response) => {
      console.log(response);
      vm.subscriber = response.data.subscriber;
      console.log(vm.subscriber);
    });
  }

  function goToEditSub () {
    $state.go('root.edit-subscriber', {id: $stateParams.id});
  }

};

SingleSubscriberController.$inject = ['$state', 'SubscriberService', '$stateParams'];

export default SingleSubscriberController;