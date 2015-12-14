let ArticleService = function($http, HEROKU) {

  let url = HEROKU.URL + 'articles';
  let subjectURL = HEROKU.URL + 'subject/';

  this.addArticle = addArticle;
  this.getAllArticles = getAllArticles;
  this.getSingleArticle = getSingleArticle;
  this.editArticle = editArticle;
  this.deleteArticle = deleteArticle;
  this.getSubjectArticles = getSubjectArticles;
  this.getSubscribers = getSubscribers;


  function addArticle (article, fileObj) {

    let formData = new FormData();

    formData.append('subject_names', article.subject_names);
    formData.append('title', article.title);
    formData.append('content', article.content);
    formData.append('media', fileObj);

    HEROKU.CONFIG.headers['Content-Type'] = undefined;

    return $http.post(url, formData, HEROKU.CONFIG);
  }

  function getAllArticles () {
    console.log('getAllArticles function is called');
    return $http.get(url, HEROKU.CONFIG);
  }

  function getSingleArticle (articleId) {
    console.log('getSingleArticle function called');
    return $http.get(url + '/' + articleId, HEROKU.CONFIG);
  }

  function editArticle (article) {
    return $http.put(url + '/' + article.id, article, HEROKU.CONFIG);
  }

  // PASS IN ARTICLE ID TO ^ and below

  function deleteArticle (articleId) {
    return $http.delete(url + '/' + articleId, HEROKU.CONFIG);
  }

  function getSubjectArticles (subjectName) {
    return $http.get(subjectURL + subjectName, HEROKU.CONFIG);
  }

  function getSubscribers (articleId) {
    return $http.get(url + '/' + articleId + '/' + 'subscribers', HEROKU.CONFIG);
  }


};

ArticleService.$inject = ['$http', 'HEROKU'];

export default ArticleService;