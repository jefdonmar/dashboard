let ProfileController = function($scope, UserService) {
  
  console.log('ProfileController'); 

  let vm = this;

  vm.sendUserInfo   = sendUserInfo;
  vm.addNewSubject  = addNewSubject;
  vm.updateSubjects = updateSubjects;

  $scope.logOut = logout;


  let userSubjects = [];

  function logout () {
    console.log('LOGOUT CALLED');
    UserService.logout();
  }

  function addNewSubject (subjectName) {
    UserService.addNewSubject(subjectName).then( (response)=> {
      console.log(response);
      location.reload();
    });
  }

  function updateSubjects (subjects) {
    console.log(subjects);
    let postSubjects = [];
    subjects.forEach( function (subject) {
      postSubjects.push(subject.name);
    });
    setTimeout ( function () {
      postSubjects.forEach( function(subject) {
        UserService.updateSubjects(subject.name).then( (response) => {
          console.log('RESPONSE', response);
        });
      });
    }, 2000);

  }



  getUser();
  getUserSubjects ();

  function getUser () {
    UserService.getUser().then( (response) => {
      // console.clear();
      let user = response.data.user;
      console.log('USER', user);
      $scope.user = user;
    });
  }

  function getUserSubjects () {
    UserService.getUserSubjects().then( (response) => {
      let currentSubjects = response.data.subjects;
      vm.currentSubjects = currentSubjects;

      currentSubjects.forEach( function (subject) {
        userSubjects.push(subject.name);
      });

      setTimeout ( function () {
        console.log('WAIT FOR ARRAY', userSubjects);
      }, 2000);

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