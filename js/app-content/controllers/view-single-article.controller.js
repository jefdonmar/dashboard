let SingleArticleController = function($state, ArticleService, $stateParams) {
  
  // console.log('SingleArticleController controller')

  let vm = this;

  vm.editMe = editMe;
  vm.deleteMe = deleteMe;

  activate();

  function activate () {
    ArticleService.getSingleArticle($stateParams.id).then ( (response) => {
      vm.article = response.data.article;
      console.log(vm.article);
    });
    
  }

  function editMe (article) {
    let articleId = article.id;
    console.log(articleId);
    $state.go('root.edit-article', {id: articleId});
    ArticleService.editArticle(articleId).then( () => {
      alert('article edit page coming up...');
      $state.go('root.view-articles');
    });
  }

  function deleteMe (article) {
    let articleId = article.id;
    console.log(articleId);
    ArticleService.deleteArticle(articleId).then( (response) => {
      console.log(response);
      alert('Article was deleted');
      $state.go('root.view-articles');
    });
  }

};

SingleArticleController.$inject = ['$state', 'ArticleService', '$stateParams'];

export default SingleArticleController;