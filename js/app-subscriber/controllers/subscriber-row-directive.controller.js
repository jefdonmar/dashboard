let SubscriberRowController = function(SubscriberService, $state) {
  
  let vm = this;

  vm.deleteSub = deleteSub;

  function deleteSub (subscriber) {
    SubscriberService.deleteSubscriber(subscriber).then( (response) => {
      console.log(response);
      $state.reload();
    });
  }

};

SubscriberRowController.$inject = ['SubscriberService', '$state'];

export default SubscriberRowController;