let SingleArticleController = function($state, ArticleService, $stateParams) {
  
  // console.log('SingleArticleController controller')

  let vm = this;

  activate();

  function activate () {
    ArticleService.getSingleArticle($stateParams.id).then ( (response) => {
      vm.article = response.data.article;
      console.log(vm.article);
    });
    
  }

};

SingleArticleController.$inject = ['$state', 'ArticleService', '$stateParams'];

export default SingleArticleController;