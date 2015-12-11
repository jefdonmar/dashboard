let NewsletterService = function($state, $http, HEROKU) {
  
  let url = HEROKU.URL;

  this.tempContent = tempContent;

  let tempContent = {};

  console.log('NewsletterService is working');

  function Newsletter (newsObj) {
    this.newsName     = newsObj.name;
    this.subjects     = newsObj.subjectNames.toString();
  }

  this.getSubjects = getSubjects;
  this.getAllSubscribers = getAllSubscribers;
  this.sendContent = sendContent;

  function getSubjects (subject) {
    return $http.get(url + 'subject/' + subject, HEROKU.CONFIG);
  }

  function getAllSubscribers () {
    return $http.get(url + 'subscribers', HEROKU.CONFIG);
  }

  function sendContent (content) {
    console.log(content);
    return $http.post(url + 'emails', 
      {
        html: content,
        subject: 'Test',
        email: 'robertbcramer@icloud.com'
      },
      HEROKU.CONFIG);
    // return $http({
    //   url: url + 'emails', 
    //   method: POST,
    //   data: {
        
    //   },
    //   headers: HEROKU.CONFIG
    // });
  }
};

NewsletterService.$inject = ['$state', '$http', 'HEROKU'];

export default NewsletterService;     