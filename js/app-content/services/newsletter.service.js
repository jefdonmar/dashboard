let NewsletterService = function($state, $http, HEROKU) {
  
  let url = HEROKU.URL;

  this.tempContent = [];
  this.segmentEmails = [];

  console.log('NewsletterService is working');

  function Newsletter (newsObj) {
    // this.newsName     = newsObj.name;
    this.subjects     = newsObj.subjectNames.toString();
  }

  this.getSubjects = getSubjects;
  this.getAllSubscribers = getAllSubscribers;
  this.sendContent = sendContent;
  this.preContent = '<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><meta name="viewport" content="width=device-width"/></head><body><table class="body" style="width: 100%;"><tr><td class="center" align="center" valign="center"><p style="text-align: center;">Click to view in your browser</p></td></tr><tr><td class="wrapper"><table>';
  this.postContent = '</table></td></tr></table></body></html>';
  this.getMatchedSubscribers = getMatchedSubscribers;

  function getSubjects (subject) {
    return $http.get(url + 'subject/' + subject, HEROKU.CONFIG);
  }

  function getAllSubscribers () {
    return $http.get(url + 'subscribers', HEROKU.CONFIG);
  }

  function sendContent (content, preContent, postContent, newsletter, emailRecipients) {
    // console.log(content);
    // console.log(preContent);
    // console.log(postContent);
    console.log('NEWSLETTER', newsletter);
    console.log('EMAIL IS TO:', emailRecipients.toString());
    return $http.post(url + 'emails', 
      {
        html: preContent + content + postContent,
        subject: newsletter.name,
        email: emailRecipients.toString()
      },
      HEROKU.CONFIG);
  }

  function getMatchedSubscribers (subjects, subscribers) {
    console.log('SUBJECTS TO MATCH', subjects);
    console.log('ALL SUBSCRIBERS', subscribers);
    let segmentEmails = [];
    subscribers.forEach( function (subscriber) {
      subjects.forEach( function (subject) {
        if ( subscriber.subject_names.includes(subject) && !segmentEmails.includes(subscriber.email) ){
          segmentEmails.push(subscriber.email);
        }
      });
    });
    console.log('SEGMENT EMAILS', segmentEmails);
    if (segmentEmails.length < 1) {
      alert('No subscribers match selected subjects');
    }
    this.segmentEmails = segmentEmails;
  }

};

NewsletterService.$inject = ['$state', '$http', 'HEROKU'];

export default NewsletterService;     