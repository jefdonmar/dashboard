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
      console.log('ARTICLES', response.data.subject.articles);
      vm.articles = response.data.subject.articles;
    });
  }


  function goToArticle (article) {
    $state.go('root.single-article', {id: article.id });
  }

};

ArticleBySubjectController.$inject = ['$state', '$scope', 'ArticleService'];

export default ArticleBySubjectController;