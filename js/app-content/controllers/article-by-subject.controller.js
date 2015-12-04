let ArticleBySubjectController = function($state, $scope, ArticleService) {
  
  // console.log('Hello from the view articles controller');

  let vm = this;

  vm.goToArticle = goToArticle;
  vm.subjectName = subjectName;

  // vm.articles = [];

  $scope.sortType = 'title';
  $scope.sortReverse = false;

  function subjectName (subjNAME) {
    console.log(subjNAME);
    ArticleService.getSubjectArticles(subjNAME).then( (response)=> {
      console.log(response);
      // vm.articles = response;
      // console.log(vm.articles);
    });
  }


  function goToArticle (article) {
    $state.go('root.single-article', {id: article.id });
  }

};

ArticleBySubjectController.$inject = ['$state', '$scope', 'ArticleService'];

export default ArticleBySubjectController;