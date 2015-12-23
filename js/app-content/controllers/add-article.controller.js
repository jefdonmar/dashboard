let AddArticleController = function($state, $scope, ArticleService, UserService) {
  
  let vm = this;
  vm.addArticle = addArticle;
  vm.addImage = addImage;

  // --- USER SERVICE PROVIDES ACCESS TO SUBJECT NAMES ---
  UserService.accessUserSubjects();
  $scope.subjects = UserService.userSubjects;

  // --- USER SERVICE PROVIDES LOGOUT FUNCTION ---
  $scope.logOut = logout;

  function logout () {
    console.log('LOGOUT CALLED');
    UserService.logout();
  }

  function addArticle (article) {

    let fileField = document.getElementById('articleImg');
    let fileObj = fileField.files[0];  

    ArticleService.addArticle(article, fileObj).then( (response)=> {
      console.log(response);
      $state.go('root.view-articles');
    });
  }

  function addImage (file) {
    // $scope.article.media = file;
    // $scope.article.media = file;
    console.log('called function');
    console.log(file);
    $scope.article.media = file.name;
  }

};

AddArticleController.$inject = ['$state', '$scope', 'ArticleService', 'UserService'];

export default AddArticleController;