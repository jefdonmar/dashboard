let SubscriberRowController = function(SubscriberService, $state) {
  
  let vm = this;

  vm.deleteSub = deleteSub;
  vm.viewSub   = viewSub;
  vm.editSub   = editSub;

  function deleteSub (subscriber) {
    SubscriberService.deleteSubscriber(subscriber).then( (response) => {
      console.log(response);
      $state.reload();
    });
  }

  function viewSub (subscriber) {
    console.log(subscriber.id);
    $state.go('root.view-subscriber', {id: subscriber.id});
  }

  function editSub (subscriber) {
    console.log(subscriber.id);
    $state.go('root.edit-subscriber', {id: subscriber.id});
  }

};

SubscriberRowController.$inject = ['SubscriberService', '$state'];

export default SubscriberRowController;