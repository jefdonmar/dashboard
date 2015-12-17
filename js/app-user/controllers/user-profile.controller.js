let ProfileController = function($scope, UserService) {
  
  console.log('ProfileController'); 

  let vm = this;

  vm.sendUserInfo = sendUserInfo;

  $scope.logOut = logout;

  function logout () {
    console.log('LOGOUT CALLED');
    UserService.logout();
  }



  getUser();

  function getUser () {
    UserService.getUser().then( (response) => {
      console.clear();
      let user = response.data.user;
      console.log('USER', user);
      $scope.user = user;
    });
  }

  function sendUserInfo (user) {
    console.log(user);
    UserService.sendKey(user).then( (response) => {
      console.log('RESPONSE', response);
    });
  }

};

ProfileController.$inject = ['$scope', 'UserService'];

export default ProfileController;