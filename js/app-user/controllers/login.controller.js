let LoginController = function($scope, $state, UserService) {
  
  console.log('Hello from the LoginController');

  // set view model to this object
  let vm = this;

  // set of functions we will define in the controller
  vm.login = login;

  function login (userObj) {
    console.log(userObj);
    UserService.login(userObj).then( (res) => {
      let loginRES = res.data.user;
      console.log(loginRES);
      UserService.storeAuth(loginRES);
    });
    $state.go('root.main-dashboard');
  }

};

LoginController.$inject = ['$scope', '$state', 'UserService'];

export default LoginController;