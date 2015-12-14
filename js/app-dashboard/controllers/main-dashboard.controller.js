let MainDashboardController = function($state, DashboardService, $scope) {
  
  // console.clear();


  let vm = this;

  DashboardService.getAllSubscribers().then( (response) => {
    console.log('SUBSCRIBERS', response.data.subscriber);
    let subscribers = response.data.subscriber; 
    vm.subscribers = subscribers;

    let today = new Date ();
    let shortToday = today.toString().substring(0,15);
    console.log('TODAY', shortToday);

    subscribers.forEach( function (subscriber) {
      DashboardService.cleanDates(subscriber);
    });
    console.log('CLEANED DATES', subscribers);

    let addedToday = [];
    subscribers.forEach( function (subscriber) {
      let shortDate = subscriber.created_at.toString().substring(0,15);
      if (shortDate === shortToday) {
        addedToday.push(subscriber.email);
      }
      vm.newToday = addedToday;
    });

  });


  // Doughnut Chart for Subscriber Preferences
  $scope.piePrefLabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.piePrefData = [300, 500, 100];


  // Subject subscriber bar graph
  $scope.subBarLabels = ['Baseball', 'Basketball', 'Football', 'Hockey', 'Soccer'];
  // $scope.subBarSeries = ['Series A', 'Series B'];

  $scope.subBarData = [
    [65, 59, 80, 81, 56, 55, 40]
  ];


};

MainDashboardController.$inject = ['$state', 'DashboardService', '$scope'];

export default MainDashboardController;