let EditSubscriberController = function($state, SubscriberService, $stateParams, $scope) {
  
  console.log('Edit Subscriber Controller');

  let vm = this;

  vm.submitSubEdits = submitSubEdits;

  activate ();

  $scope.subject_names = [
   'Football',
   'Baseball',
   'Basketball',
   'Soccer',
   'Hockey'
  ]; 

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
      $state.go('root.view-subscribers');
    });
  }

};

EditSubscriberController.$inject = ['$state', 'SubscriberService', '$stateParams', '$scope'];

export default EditSubscriberController;