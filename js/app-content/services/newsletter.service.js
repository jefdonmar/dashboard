let NewsletterService = function($state, $http, HEROKU) {
  
  let url = HEROKU.URL;

  console.log('NewsletterService is working');

  function Newsletter (newsObj) {
    this.newsName     = newsObj.name;
    this.subjects     = newsObj.subjectNames.toString();
  }

  this.getSubjects = getSubjects;

  function getSubjects (subject) {
    return $http.get(url + 'subject/' + subject, HEROKU.CONFIG);
  }
};

NewsletterService.$inject = ['$state', '$http', 'HEROKU'];

export default NewsletterService;     