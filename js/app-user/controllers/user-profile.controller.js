let ProfileController = function($scope, UserService, ArticleService) {
  
  console.log('ProfileController'); 

  let vm = this;

  vm.sendUserInfo   = sendUserInfo;
  vm.addNewSubject  = addNewSubject;
  vm.updateSubjects = updateSubjects;


  vm.subjectRef = [];
  vm.subjectPush = [];


  $scope.logOut = logout;


  let userSubjects = [];


  let subjectRef = [];
  let articlesBySubj = [];
  let subscribersBySubj = [];

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
      postSubjects.push(subject);
    });
    setTimeout ( function () {
      postSubjects.forEach( function(subject) {
        UserService.updateSubjects(subject).then( (response) => {
          console.log('RESPONSE', response);
        });
      });
    }, 1500);
    setTimeout ( function () {
      location.reload();
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
      console.log('ALL SUBJECTS', currentSubjects);

      currentSubjects.forEach( function (subject) {
        userSubjects.push(subject.name);
        ArticleService.getSubjectArticles(subject.name).then( (response)=> {
          // console.log('SUBJECT ARTICLES', response);
          // console.log(subject.name);

          console.log('INDEX', currentSubjects.indexOf(subject));


          // subjectRef.push(subject.name);

          vm.subjectPush.push(subject.name);

          vm.subjectRef.push(
            {
              name: subject.name,
              articles: response.data.subject.articles.length,
              subscribers: response.data.subject.subscribers.length
            });
          // subscribersBySubj.push(response.data.subject.subscribers.length);

          // console.log('REF', vm.subjectRef);
          // console.log('CURRENT', vm.currentSubjects[0]);
          // vm.articlesBySubj = articlesBySubj;
          // console.log(vm.articlesBySubj);
          // vm.subscribersBySubj = subscribersBySubj;
          // console.log(vm.subscribersBySubj);

          // console.log(vm.subscribersBySubj);
          // vm.subjectRef = subjectRef;
          console.log(vm.subjectRef);
          console.log(vm.subjectPush);
          
        });
      });

      setTimeout ( function () {
        console.log('WAIT FOR ARRAY', userSubjects);
        UserService.userSubjects = userSubjects;
        console.log('ON USERSERVICE', UserService.userSubjects);
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

ProfileController.$inject = ['$scope', 'UserService', 'ArticleService'];

export default ProfileController;