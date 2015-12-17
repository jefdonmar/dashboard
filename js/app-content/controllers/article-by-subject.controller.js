let ArticleBySubjectController = function($state, $scope, ArticleService, UserService) {
  
  // console.log('Hello from the view articles controller');

  let vm = this;

  vm.goToArticle = goToArticle;
  vm.subjectName = subjectName;

  // vm.articles = [];

  $scope.sortType = 'title';
  $scope.sortReverse = false;

  $scope.logOut = logout;

  function logout () {
    console.log('LOGOUT CALLED');
    UserService.logout();
  }

  function subjectName (subjNAME) {
    console.log(subjNAME);
    ArticleService.getSubjectArticles(subjNAME).then( (response)=> {
      console.log('ARTICLES', response.data.subject.articles);
      vm.articles = response.data.subject.articles;
    });
  }


  function goToArticle (article) {
    $state.go('root.single-article', {id: article.id });
  }

};

ArticleBySubjectController.$inject = ['$state', '$scope', 'ArticleService', 'UserService'];

export default ArticleBySubjectController;