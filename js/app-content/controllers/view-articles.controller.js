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
    let theArticles = response.data.article;
    theArticles.forEach( function (article) {
      if (article.media === '/media/original/missing.png') {
        article.media = false;
      } 
      vm.articles = theArticles;
      console.log('DELAYED', vm.articles);
    });
  });

  function goToArticle (article) {
    $state.go('root.single-article', {id: article.id });
  }

};

ViewArticlesController.$inject = ['$state', '$scope', 'ArticleService', 'UserService'];

export default ViewArticlesController;