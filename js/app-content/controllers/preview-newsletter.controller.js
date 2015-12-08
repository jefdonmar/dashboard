let PreviewNewsletterController = function($scope, NewsletterService, ArticleService) {
  
  console.log('PreviewNewsletterController here');

  let vm = this;

  vm.getArticles = getArticles;

  getArticles();

  function getArticles () {
    ArticleService.getAllArticles().then( (response)=> {
      vm.articles = response.data.article;
      console.log(vm.articles);
    });
  }


};

PreviewNewsletterController.$inject = ['$scope', 'NewsletterService', 'ArticleService'];

export default PreviewNewsletterController;