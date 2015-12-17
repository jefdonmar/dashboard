let EditArticleController = function($state, ArticleService, $stateParams, $scope) {
  
  let vm = this;

  vm.submitEdits = submitEdits;

  $scope.subjects = [
   'Football',
   'Baseball',
   'Basketball',
   'Soccer',
   'Hockey'
  ]; 

  activate();

  function activate () {
    ArticleService.getSingleArticle($stateParams.id).then ( (response) => {
      vm.article = response.data.article;
      console.log(vm.article);
    });
  }

  function submitEdits (article) {
    let articleId = article.id;
    console.log(articleId);
    ArticleService.editArticle(article).then( (response) => {
      console.log(articleId);
      $state.go('root.single-article', {id: articleId}); 
      console.log(response);
    });
  }  

};

EditArticleController.$inject = ['$state', 'ArticleService', '$stateParams', '$scope'];

export default EditArticleController;