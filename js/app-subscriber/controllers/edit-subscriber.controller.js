let EditSubscriberController = function($state, SubscriberService, $stateParams, $scope, UserService) {
  
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

  $scope.logOut = logout;

  function logout () {
    console.log('LOGOUT CALLED');
    UserService.logout();
  }

  function activate () {
    SubscriberService.getSingleSubscriber($stateParams.id).then( (response) => {
      console.log(response);
      vm.subscriber = response.data.subscriber;
      console.log(vm.subscriber);
      let subscriber = vm.subscriber;
      SubscriberService.getArticles(subscriber.id).then( (response) => {
        console.log('ARTICLES', response.data.subscriber.articles);
        vm.associatedArticles = response.data.subscriber.articles;
      });
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

EditSubscriberController.$inject = ['$state', 'SubscriberService', '$stateParams', '$scope', 'UserService'];

export default EditSubscriberController;