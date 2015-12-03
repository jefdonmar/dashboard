let ViewArticlesController = function($state, ArticleService) {
  
  // console.log('Hello from the view articles controller');

  let vm = this;

  ArticleService.getAllArticles().then( (response)=> {
    vm.articles = response.data.article;
    console.log(vm.articles);
  });

};

ViewArticlesController.$inject = ['$state', 'ArticleService'];

export default ViewArticlesController;