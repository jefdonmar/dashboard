let AddArticleController = function($state, $scope, ArticleService) {
  
  console.log('Hello from the add article controller');

  let vm = this;
  vm.addArticle = addArticle;
  vm.addImage = addImage;

  $scope.subjects = [
   'Football',
   'Baseball',
   'Basketball',
   'Soccer',
   'Hockey'
  ]; 

  function addArticle (article) {

    let fileField = document.getElementById('articleImg');
    let fileObj = fileField.files[0];  

    ArticleService.addArticle(article, fileObj).then( (response)=> {
      console.log(response);
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

AddArticleController.$inject = ['$state', '$scope', 'ArticleService'];

export default AddArticleController;