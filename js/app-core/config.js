let config = function($urlRouterProvider, $stateProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/app-layout/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      controller: 'HomeController as vm',
      templateUrl: 'templates/app-layout/home.tpl.html'
    })
    .state('root.add-subscriber', {
      url: '/add-subscriber',
      controller: 'AddSubscriberController as vm',
      templateUrl: 'templates/app-subscriber/add-subscriber.tpl.html'
    })
    .state('root.view-subscribers', {
      url: '/view-subscribers',
      controller: 'ViewSubscribersController as vm',
      templateUrl: 'templates/app-subscriber/view-subscribers.tpl.html'
    });

};

config.$inject = ['$urlRouterProvider', '$stateProvider'];

export default config;