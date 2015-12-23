let EditArticleController = function($state, ArticleService, $stateParams, $scope, UserService) {
  
  let vm = this;

  vm.submitEdits = submitEdits;
  vm.goToArticle = goToArticle;
  vm.removeImg   = removeImg;

  $scope.logOut = logout;

  function logout () {
    console.log('LOGOUT CALLED');
    UserService.logout();
  }


  // --- USER SERVICE PROVIDES ACCESS TO SUBJECT NAMES ---
  UserService.accessUserSubjects();
  $scope.subjects = UserService.userSubjects;

  activate();

  function activate () {
    ArticleService.getSingleArticle($stateParams.id).then ( (response) => {
      vm.article = response.data.article;
      console.log(vm.article);
    });
  }

  function removeImg (article) {
    console.log('CALLED', article);
    let articleId = article.id;
    console.log(articleId);

    ArticleService.removeImg(article).then( (response) => {
      $state.go('root.single-article', {id: articleId}); 
      console.log('IMG REMOVED TEST', response);
    });
  }

  function goToArticle (article) {
    $state.go('root.single-article', {id: article.id });
  }

  function submitEdits (article) {
    
    let articleId = article.id;
    console.log(articleId);
    
    let fileField = document.getElementById('articleImg');
    let fileObj = fileField.files[0]; 
    console.log(fileObj);

    if (fileObj) {
      ArticleService.editArticleWithUpload(article, fileObj).then( (response) => {
        console.log(articleId);
        $state.go('root.single-article', {id: articleId}); 
        console.log(response);
      });
    } else {
      alert('For now, images can only be uploaded as a file');
      // ArticleService.editArticle(article).then( (response) => {
      //   console.log(articleId);
      //   $state.go('root.single-article', {id: articleId}); 
      //   console.log(response);
      // });
    }
    
  }  

};

EditArticleController.$inject = ['$state', 'ArticleService', '$stateParams', '$scope', 'UserService'];

export default EditArticleController;