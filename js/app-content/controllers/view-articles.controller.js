let ViewArticlesController = function($state, ArticleService) {
  
  // console.log('Hello from the view articles controller');

  let vm = this;

  vm.goToArticle = goToArticle;

  ArticleService.getAllArticles().then( (response)=> {
    vm.articles = response.data.article;
    console.log(vm.articles);
  });

  function goToArticle (article) {
    $state.go('root.single-article', {id: article.id });
  }

};

ViewArticlesController.$inject = ['$state', 'ArticleService'];

export default ViewArticlesController;