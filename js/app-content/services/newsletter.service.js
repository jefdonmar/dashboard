let NewsletterService = function($state, $http, HEROKU) {
  
  let url = HEROKU.URL;

  console.log('NewsletterService is working');

  function Newsletter (newsObj) {
    this.newsName     = newsObj.name;
    this.subjects     = newsObj.subjectNames.toString();
  }

  this.getSubjects = getSubjects;

  function getSubjects (newsObj) {
    let newsletter = new Newsletter(newsObj);
    let subjectNames = newsletter.subjects;
    console.log(subjectNames);
    let cleanedList = subjectNames.split(',');
    console.log(cleanedList);
    return cleanedList.forEach( function(subject) {
      $http.get(url + 'subject/' + subject, HEROKU.CONFIG);
    });
  }
};

NewsletterService.$inject = ['$state', '$http', 'HEROKU'];

export default NewsletterService;     