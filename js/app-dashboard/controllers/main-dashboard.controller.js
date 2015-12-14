let MainDashboardController = function($state, DashboardService, $scope) {
  
  // console.clear();


  let vm = this;

  let subjects = [
   {name: 'Football', count: 0},
   {name: 'Baseball', count: 0}, 
   {name: 'Basketball', count: 0},
   {name: 'Soccer', count: 0},
   {name: 'Hockey', count: 0}
  ]; 

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
  $scope.piePrefLabels = subjectNames;
  $scope.piePrefData = subjectCounts;

  // Preferences bar graph
  $scope.subBarLabels = subjectNames;
  $scope.subBarData = [subjectCounts];

  });



};

MainDashboardController.$inject = ['$state', 'DashboardService', '$scope'];

export default MainDashboardController;