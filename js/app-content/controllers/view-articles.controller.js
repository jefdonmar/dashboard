let ViewArticlesController = function($state, $scope, ArticleService) {
  
  // console.log('Hello from the view articles controller');

  let vm = this;

  vm.goToArticle = goToArticle;

  // vm.articles = [];

  $scope.sortType = 'title';
  $scope.sortReverse = false;

  ArticleService.getAllArticles().then( (response)=> {
    vm.articles = response.data.article;
    console.log(vm.articles);
  });

  function goToArticle (article) {
    $state.go('root.single-article', {id: article.id });
  }

};

ViewArticlesController.$inject = ['$state', '$scope', 'ArticleService'];

export default ViewArticlesController;