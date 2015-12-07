let EditSubscriberController = function($state, SubscriberService, $stateParams) {
  
  console.log('Edit Subscriber Controller');

  let vm = this;

  vm.submitSubEdits = submitSubEdits;

  activate ();

  function activate () {
    SubscriberService.getSingleSubscriber($stateParams.id).then( (response) => {
      console.log(response);
      vm.subscriber = response.data.subscriber;
      console.log(vm.subscriber);
    });
  }

  function submitSubEdits (subscriber) {
    let subscriberId = subscriber.id;
    console.log(subscriberId);
    SubscriberService.editSubscriber(subscriber).then( (response) => {
      console.log(response);
      $state.go('root.view-subscriber', {id: subscriberId});
    });
  }

};

EditSubscriberController.$inject = ['$state', 'SubscriberService', '$stateParams'];

export default EditSubscriberController;