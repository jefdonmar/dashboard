let MainDashboardController = function($state, DashboardService, $scope, UserService) {
  
  console.log(UserService);
  // --- USER SERVICE PROVIDES ACCESS TO SUBJECT NAMES ---
  UserService.accessUserSubjects();
  // console.log(UserService.userSubjects);
  // $scope.subjects = UserService.userSubjects;

  let subjects = [];


  let userSubjects = UserService.userSubjects;
  console.log(userSubjects);

  setTimeout( function() {
    userSubjects.forEach( function(subject) {
      subjects.push(
      {
        name: subject,
        count: 0,
        articles: 0
      }
      );
    });
  }, 1000);


  $scope.logOut = logout;

  function logout () {
    console.log('LOGOUT CALLED');
    UserService.logout();
  }

  let vm = this;

  // let subjects = [
  //  {name: 'Football', count: 0, articles: 0},
  //  {name: 'Baseball', count: 0, articles: 0}, 
  //  {name: 'Basketball', count: 0, articles: 0},
  //  {name: 'Soccer', count: 0, articles: 0},
  //  {name: 'Hockey', count: 0, articles: 0}
  // ]; 

  setTimeout( function() {
    DashboardService.getAllSubscribers().then( (response) => {
      console.log('SUBSCRIBERS', response.data.subscriber);
      let subscribers = response.data.subscriber; 
      vm.subscribers = subscribers;

      let today = new Date ();
      let shortToday = today.toString().substring(0,15);
      subscribers.forEach( function (subscriber) {
        DashboardService.cleanDates(subscriber);
      });

      let addedToday = [];
      subscribers.forEach( function (subscriber) {
        let shortDate = subscriber.created_at.toString().substring(0,15);
        if (shortDate === shortToday) {
          addedToday.push(subscriber.email);
        }
        vm.newToday = addedToday;
      });

      subscribers.forEach ( function (subscriber) {
        subjects.forEach ( function (subject) {
          if (subscriber.subject_names.includes(subject.name)) {
            subject.count = subject.count + 1;
          }
        });
      });
   
      console.log('AFTER SUBJECT', subjects);
      let subjectNames = [];
      let subjectCounts = [];

      subjects.forEach ( function (subject) {
        subjectNames.push(subject.name);
        subjectCounts.push(subject.count);
      });

      console.log('NAMES', subjectNames);
      console.log('COUNTS', subjectCounts);

      // Pie Chart for Subscriber Preferences
      $scope.piePrefData = subjectCounts;

      // Preferences bar graph
      $scope.subBarData = [subjectCounts];


      // BAR LABELS
      $scope.subBarLabels = subjectNames;
      $scope.articleBarLabels = subjectNames; 
      
      // PIE CHART LABELS
      $scope.piePrefLabels = subjectNames;
      $scope.pieArticleLabels = subjectNames;

    });
    
    DashboardService.getAllArticles().then( (response) => {
      let articles = response.data.article;
      console.log('ARTICLES', articles);

      let subjectArticles = [];
      
      articles.forEach ( function (article) {
        subjects.forEach ( function (subject) {
          if (article.subject_names.includes(subject.name)) {
            subject.articles = subject.articles + 1;
          }
        });
      });

      subjects.forEach ( function (subject) {
        subjectArticles.push(subject.articles);
      });

      console.log('ARTICLE COUNTS', subjectArticles);
      console.log('SUBJECTS', subjects);

      // bar graph values
      $scope.articleBarData = [subjectArticles];
      $scope.pieArticleData = subjectArticles;

    });
  }, 1500);


};

MainDashboardController.$inject = ['$state', 'DashboardService', '$scope', 'UserService'];

export default MainDashboardController;