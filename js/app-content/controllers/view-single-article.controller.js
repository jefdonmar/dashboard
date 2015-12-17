let SingleArticleController = function($state, ArticleService, $stateParams, $scope, UserService) {
  
  // console.log('SingleArticleController controller')

  let vm = this;

  vm.editMe = editMe;
  vm.deleteMe = deleteMe;

  $scope.logOut = logout;

  function logout () {
    console.log('LOGOUT CALLED');
    UserService.logout();
  }


  activate();

  function activate () {
    ArticleService.getSingleArticle($stateParams.id).then ( (response) => {
      vm.article = response.data.article;
      console.log(vm.article);
      let article = vm.article;
      ArticleService.getSubscribers(article.id).then( (response) => {
        console.log('SUBSCRIBERS', response.data.article.subscribers);
        vm.associatedSubscribers = response.data.article.subscribers;
      });
    });
    
  }

  function editMe (article) {
    let articleId = article.id;
    console.log(articleId);
    $state.go('root.edit-article', {id: articleId}); 
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

SingleArticleController.$inject = ['$state', 'ArticleService', '$stateParams', '$scope', 'UserService'];

export default SingleArticleController;