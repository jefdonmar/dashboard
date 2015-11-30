let ArticleService = function($http, HEROKU) {
  
  // console.log('Hello from the ArticleService');

  // let url = HEROKU.URL + 'content';

  // this.addArticle = addArticle;

  // function Article (article) {
  //   this.tag       = article.tag;
  //   this.headline  = article.headline;
  //   this.paragraph = article.paragraph;
  // }

  // function addArticle (article) {
  //   let a = new Article (article);
  //   return $http.post(url, a, HEROKU.CONFIG.headers);
  // }

};

ArticleService.$inject = ['$http', 'HEROKU'];

export default ArticleService;