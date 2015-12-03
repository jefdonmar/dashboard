let AddArticleController = function($state, $scope, ArticleService) {
  
  console.log('Hello from the add article controller');

  let vm = this;
  vm.addArticle = addArticle;

  function addArticle (article) {
    ArticleService.addArticle(article).then( (response)=> {
      console.log(response);
    });
  }

};

AddArticleController.$inject = ['$state', '$scope', 'ArticleService'];

export default AddArticleController;