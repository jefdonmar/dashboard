let ArticleService = function($http, HEROKU) {

  let url = HEROKU.URL + 'articles';

  this.addArticle = addArticle;
  this.getAllArticles = getAllArticles;

  function Article (article) {
    this.subject_names       = article.subject_names;
    this.title  = article.title;
    this.content = article.content;
  }

  function addArticle (article) {
    let a = new Article (article);
    return $http.post(url, a, HEROKU.CONFIG);
  }

  function getAllArticles () {
    console.log('getAllArticles function is called');
    return $http.get(url, HEROKU.CONFIG);
  }

};

ArticleService.$inject = ['$http', 'HEROKU'];

export default ArticleService;