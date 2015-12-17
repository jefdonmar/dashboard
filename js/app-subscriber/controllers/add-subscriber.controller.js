let AddSubscriberController = function($state, $scope, SubscriberService, UserService) {

  console.log('We are the Add Controller People');

  let vm = this; 
  vm.addSubscriber = addSubscriber;
  vm.validateEmail = validateEmail;

  $scope.subject_names = [
   ' Football',
   ' Baseball',
   ' Basketball',
   ' Soccer',
   ' Hockey'
  ]; 

  $scope.logOut = logout;

  function logout () {
    console.log('LOGOUT CALLED');
    UserService.logout();
  }

  function addSubscriber (subObj) {
    console.log('Supposed to add now');
    SubscriberService.addSubscriber(subObj).then( (res)=>{
      console.log(res);
      $state.go('root.main-dashboard');
    });
  }

  $scope.$watch('sub.email', function (newVal) {

    if (!newVal) return;

    if (!validateEmail(newVal)) {
      $scope.sub.emailError = 'Email needs an @ symbol';
      return console.log('Email needs an @ symbol');
    } else {
      $scope.sub.emailError = undefined;
    }

  });

  function validateEmail (field) {
    return (field.indexOf('@') >= 0) ? true : false;
  }

};

AddSubscriberController.$inject = ['$state', '$scope', 'SubscriberService', 'UserService'];

export default AddSubscriberController;