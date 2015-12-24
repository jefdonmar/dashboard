let ArticleService = function($http, HEROKU) {

  let url = HEROKU.URL + 'articles';
  let subjectURL = HEROKU.URL + 'subjects/';

  this.addArticle = addArticle;
  this.getAllArticles = getAllArticles;
  this.getSingleArticle = getSingleArticle;
  this.deleteArticle = deleteArticle;
  this.getSubjectArticles = getSubjectArticles;
  this.getSubscribers = getSubscribers;

  // EDIT ARTICLES
  this.editArticle = editArticle;
  this.editArticleWithUpload = editArticleWithUpload;
  this.removeImg = removeImg;

  function removeImg (article) {
    let updatedArticle = {
      title: article.title,
      content: article.content,
      subject_names: article.subject_names,
      media: null
    };

    console.log(updatedArticle);

    return $http.put(url + '/' + article.id, updatedArticle, HEROKU.CONFIG);

  }


  function editArticleWithUpload (article, fileObj) {
    
    console.log('FILE OBJ IN SERVICE', fileObj);
    
    let formData = new FormData();

    formData.append('subject_names', article.subject_names);
    formData.append('title', article.title);
    formData.append('content', article.content);

    if (fileObj) {
      formData.append('media', fileObj);
    } 
    
    HEROKU.CONFIG.headers['Content-Type'] = undefined;

    console.log('OBJECT', formData);

    return $http.put(url + '/' + article.id, formData, HEROKU.CONFIG);
  }


  function addArticle (article, fileObj) {

    console.log('FILE OBJ', fileObj);
    
    let formData = new FormData();

    formData.append('subject_names', article.subject_names);
    formData.append('title', article.title);
    formData.append('content', article.content);

    if (fileObj) {
      formData.append('media', fileObj);
    } 
    
    HEROKU.CONFIG.headers['Content-Type'] = undefined;

    console.log('OBJECT', formData);

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
    return $http.put(url + '/' + article.id, 
      {
        content: article.content,
        subject_names: article.subject_names,
        title: article.title,
        media: null
      },
      HEROKU.CONFIG);
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