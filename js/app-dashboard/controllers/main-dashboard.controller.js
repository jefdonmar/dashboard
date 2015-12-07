let MainDashboardController = function($state, DashboardService, $scope) {
  
  console.log('MainDashboardController check');


  // Doughnut Chart for Subscriber Preferences
  $scope.piePrefLabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.piePrefData = [300, 500, 100];


  // Subject subscriber bar graph
  $scope.subBarLabels = ['Baseball', 'Basketball', 'Football', 'Hockey', 'Soccer'];
  $scope.subBarSeries = ['Series A', 'Series B'];

  $scope.subBarData = [
    [65, 59, 80, 81, 56, 55, 40]
  ];


};

MainDashboardController.$inject = ['$state', 'DashboardService', '$scope'];

export default MainDashboardController;