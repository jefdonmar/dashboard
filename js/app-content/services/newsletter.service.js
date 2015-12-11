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
  this.preContent = '<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><meta name="viewport" content="width=device-width"/></head><body><table class="body" style="width: 100%;"><tr><td class="center" align="center" valign="center"><p style="text-align: center;">Click to view in your browser</p></td></tr><tr>';
  this.postContent = '</tr></table></body></html>';

  // was preContent 
  // <td class="wrapper"><table>
  // was postContent
  // </table></td>

  function getSubjects (subject) {
    return $http.get(url + 'subject/' + subject, HEROKU.CONFIG);
  }

  function getAllSubscribers () {
    return $http.get(url + 'subscribers', HEROKU.CONFIG);
  }

  function sendContent (content, preContent, postContent) {
    console.log(content);
    console.log(preContent);
    console.log(postContent);
    return $http.post(url + 'emails', 
      {
        html: preContent + content + postContent,
        subject: 'Test',
        email: 'robertbcramer@icloud.com'
      },
      HEROKU.CONFIG);
  }
};

NewsletterService.$inject = ['$state', '$http', 'HEROKU'];

export default NewsletterService;     