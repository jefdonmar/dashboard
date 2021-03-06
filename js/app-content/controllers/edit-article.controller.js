let EditArticleController = function($state, ArticleService, $stateParams, $scope, UserService) {
  
  let vm = this;

  vm.submitEdits = submitEdits;
  vm.goToArticle = goToArticle;

  $scope.logOut = logout;

  function logout () {
    console.log('LOGOUT CALLED');
    UserService.logout();
  }


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

  function goToArticle (article) {
    $state.go('root.single-article', {id: article.id });
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

EditArticleController.$inject = ['$state', 'ArticleService', '$stateParams', '$scope', 'UserService'];

export default EditArticleController;