let SignupController = function($state, $scope, UserService) {
  
  console.log('Hello from the SignupController');

  // set view model to this object
  let vm = this;

  // set of functions we will define in the controller
  vm.signup = signup;
  vm.validateEmail = validateEmail;


  function signup (userObj) {
    console.log(userObj);
    UserService.signup(userObj).then( (response)=> {
      let userRES = response.data.user;
      console.log(userRES);
      UserService.storeAuth(userRES);
      $state.go('root.welcome');
    });
  }

  // watch the email entry field in the form and validate @ symbol with error msg
  $scope.$watch('user.email', function (newVal) {

    if (!newVal) return;

    if (!validateEmail(newVal)) {
      $scope.user.emailError = 'Email needs an @ symbol';
      // return console.log('Email needs an @ symbol');
    } else {
      $scope.user.emailError = undefined;
    }

  });


  function validateEmail (field) {
    return (field.indexOf('@') >= 0) ? true : false;
  }

};

SignupController.$inject = ['$state', '$scope', 'UserService'];

export default SignupController;