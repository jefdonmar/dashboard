let ProfileController = function($scope, UserService) {
  
  console.log('ProfileController'); 

  let vm = this;

  vm.sendUserInfo = sendUserInfo;


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