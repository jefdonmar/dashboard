let ArticleService = function($http, HEROKU) {
  
  console.log('Hello from the ArticleService');

  let url = HEROKU.URL + 'articles';

  this.addArticle = addArticle;

  function Article (article) {
    this.subject_names       = article.subject_names;
    this.title  = article.title;
    this.content = article.content;
  }

  function addArticle (article) {
    let a = new Article (article);
    return $http.post(url, a, HEROKU.CONFIG);
  }

};

ArticleService.$inject = ['$http', 'HEROKU'];

export default ArticleService;