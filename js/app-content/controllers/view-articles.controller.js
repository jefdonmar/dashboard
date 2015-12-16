let ViewArticlesController = function($state, $scope, ArticleService, UserService) {
  
  // console.log('Hello from the view articles controller');

  let vm = this;

  vm.goToArticle = goToArticle;

  // vm.articles = [];

  $scope.sortType = 'title';
  $scope.sortReverse = false;

  $scope.logOut = logout;

  function logout () {
    console.log('LOGOUT CALLED');
    UserService.logout();
  }

  ArticleService.getAllArticles().then( (response)=> {
    vm.articles = response.data.article;
    console.log(vm.articles);
  });

  function goToArticle (article) {
    $state.go('root.single-article', {id: article.id });
  }

};

ViewArticlesController.$inject = ['$state', '$scope', 'ArticleService', 'UserService'];

export default ViewArticlesController;