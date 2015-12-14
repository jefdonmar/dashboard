import _ from "underscore";

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
    console.log('EMAIL IS TO:', emailRecipients);
    return $http.post(url + 'emails', 
      {
        html: preContent + content + postContent,
        subject: newsletter.name,
        email: emailRecipients
      },
      HEROKU.CONFIG);
  }

  function getMatchedSubscribers (subjects, subscribers) {
    console.log('SUBJECTS TO MATCH', subjects);
    console.log('ALL SUBSCRIBERS', subscribers);
    let rawList = [];
    let segmentEmails = [];
    let numberOfSubjects = subjects.length;
    console.log('SUBJECT COUNT', numberOfSubjects);
    subscribers.forEach( function (subscriber) {  
      subjects.forEach( function (subject) {
        if ( subscriber.subject_names.includes(subject)  ){
          // && !segmentEmails.includes(subscriber.email)
          // subscriber.subject_names.includes(subject);
          segmentEmails.push(subscriber.email);
        }
      });
    });
    console.log('BEFORE', segmentEmails);


    // CREATE ARRAYS WITH EMAILS AND COUNT OF TIMES IT MATCHES
    function group(segmentEmails) {
      var each = [], count = [], prev;
      segmentEmails.sort();
      for ( var i = 0; i < segmentEmails.length; i++ )
      {
        if ( segmentEmails[i] !== prev ) {
          each.push(segmentEmails[i]);
          count.push(1);
        } else {
          count[count.length - 1]++;
        }
        prev = segmentEmails[i];
      }
      return [each, count];
    }
    var groups = group (segmentEmails);
    var unzipped =  _.unzip(groups);
    // console.log('UNZIPPED', unzipped);



    // FILTER SEGMENT FOR ONLY SUBS THAT MATCH ALL SUBJECTS
    let filteredSegment = [];
    unzipped.forEach( function (array) {
      if (array[1] === numberOfSubjects) {
        filteredSegment.push(array[0]);
      }
    });
    console.log('FILTERED', filteredSegment);




    // ALERT USER THAT NO SUBSCRIBERS MATCH CRITERIA
    if (filteredSegment.length < 1) {
      alert('No subscribers match selected subjects');
    }


    // CONVERT EMAILS TO A STRING WITH , SPACE
    let listOfEmails = filteredSegment.toString().split(',').join(', ');
    console.log('TO FIELD:', listOfEmails);

    // SET PROPERTY OF NEWSLETTER SERVICE TO PASS TO SEND FUNCTION 
    this.segmentEmails = listOfEmails;
  }

};

NewsletterService.$inject = ['$state', '$http', 'HEROKU'];

export default NewsletterService;     