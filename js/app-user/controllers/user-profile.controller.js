let ProfileController = function($scope, UserService) {
  
  console.log('ProfileController'); 

  let vm = this;

  vm.sendUserInfo = sendUserInfo;


  function sendUserInfo (user) {
    console.log(user);
    UserService.sendKey(user);
  }

};

ProfileController.$inject = ['$scope', 'UserService'];

export default ProfileController;