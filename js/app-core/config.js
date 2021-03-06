let config = function($urlRouterProvider, $stateProvider) {
  

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/app-layout/layout.tpl.html'
    })
    .state('root.welcome', {
      url: '/',
      controller: 'WelcomeController as vm',
      templateUrl: 'templates/app-user/welcome.tpl.html'
    })
    // .state('root.home', {
    //   url: '/',
    //   controller: 'HomeController as vm',
    //   templateUrl: 'templates/app-layout/home.tpl.html'
    // })
    .state('root.add-subscriber', {
      url: '/add-subscriber',
      controller: 'AddSubscriberController as vm',
      templateUrl: 'templates/app-subscriber/add-subscriber.tpl.html'
    })
    .state('root.view-subscribers', {
      url: '/view-subscribers',
      controller: 'ViewSubscribersController as vm',
      templateUrl: 'templates/app-subscriber/view-subscribers.tpl.html'
    })
    .state('root.login', {
      url: '/login',
      controller: 'LoginController as vm',
      templateUrl: 'templates/app-user/login.tpl.html'
    })
    .state('root.add-article', {
      url: '/add-article',
      controller: 'AddArticleController as vm',
      templateUrl: 'templates/app-content/add-article.tpl.html'
    })
    .state('root.signup', {
      url: '/signup',
      controller: 'SignupController as vm',
      templateUrl: 'templates/app-user/signup.tpl.html'
    })
    .state('root.view-articles', {
      url: '/view-articles',
      controller: 'ViewArticlesController as vm',
      templateUrl: 'templates/app-content/view-articles.tpl.html'
    })
    .state('root.single-article', {
      url: '/article/:id',
      controller: 'SingleArticleController as vm',
      templateUrl: 'templates/app-content/view-single-article.tpl.html'
    })
    .state('root.edit-article', {
      url: '/edit-article/:id',
      controller: 'EditArticleController as vm',
      templateUrl: 'templates/app-content/edit-article.tpl.html'
    })
    .state('root.view-subscriber', {
      url: '/view-subscriber/:id',
      controller: 'SingleSubscriberController as vm',
      templateUrl: 'templates/app-subscriber/single-subscriber.tpl.html'
    })
    .state('root.edit-subscriber', {
      url: '/edit-subscriber/:id',
      controller: 'EditSubscriberController as vm',
      templateUrl: 'templates/app-subscriber/edit-subscriber.tpl.html'
    })
    .state ('root.view-by-subject', {
      url: '/view-by-subject',
      controller: 'ArticleBySubjectController as vm',
      templateUrl: 'templates/app-content/view-by-subject.tpl.html'
    })
    .state('root.main-dashboard', {
      url: '/main-dashboard',
      controller: 'MainDashboardController as vm',
      templateUrl: 'templates/app-dashboard/main-dashboard.tpl.html'
    })
    // .state('root.welcome', {
    //   url: '/welcome',
    //   controller: 'WelcomeController as vm',
    //   templateUrl: 'templates/app-user/welcome.tpl.html'
    // })
    .state('root.build-newsletter', {
      url: '/build-newsletter',
      controller: 'BuildNewsletterController as vm',
      templateUrl: 'templates/app-content/build-newsletter.tpl.html'
    })
    // .state('root.preview-newsletter', {
    //   url: '/preview-newsletter',
    //   controller: 'PreviewNewsletterController as vm',
    //   templateUrl: 'templates/app-content/preview-newsletter.tpl.html'
    // })
    .state('root.profile', {
      url: '/profile',
      controller: 'ProfileController as vm',
      templateUrl: 'templates/app-user/profile.tpl.html'
    })
    .state('root.send-all', {
      url: '/send-all',
      controller: 'SendAllController as vm',
      templateUrl: 'templates/app-content/send-all.tpl.html'
    })
    .state('root.about', {
      url: '/about',
      controller: 'AboutUsController as vm',
      templateUrl: 'templates/app-layout/about.tpl.html'
    });

};

config.$inject = ['$urlRouterProvider', '$stateProvider'];

export default config;