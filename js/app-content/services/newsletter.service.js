import _ from "underscore";

let NewsletterService = function($state, $http, HEROKU) {
  
  // VARIABLES AND PROPERTIES

  let url = HEROKU.URL;
  let self = this;
  let emailContent = [];
  let mailerBatch = [];
  let mailerArticles = [];
  let eachEmail = [];

  this.contentTest = {};
  this.tempContent = [];
  this.sendAllContent = [];
  this.segmentEmails = [];
  this.emailContent = [];
  this.subscriberIds = [];
  this.contentCounter = 0;
  this.preContent = '<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><meta name="viewport" content="width=device-width"/></head><body><table class="body" style="width: 100%;"><tr><td class="center" align="center" valign="center"><p style="text-align: center;">Click to view in your browser</p></td></tr><tr><td class="wrapper"><table>';
  this.postContent = '</table></td></tr></table></body></html>';

  this.getSubjects = getSubjects;
  this.getAllSubscribers = getAllSubscribers;
  this.sendTest = sendTest;
  this.getMatchedSubscribers = getMatchedSubscribers;
 
  this.eachEmail = eachEmail;
  
  // this.buildEmail = buildEmail;
  
  this.blastList = blastList;
  this.getAllUserArticles = getAllUserArticles;

  // FUNCTIONS

  function Newsletter (newsObj) {
    // this.newsName     = newsObj.name;
    this.subjects     = newsObj.subjectNames.toString();
  }

  function getSubjects (subject) {
    return $http.get(url + 'subjects/' + subject, HEROKU.CONFIG);
  }

  function getAllSubscribers () {
    return $http.get(url + 'subscribers', HEROKU.CONFIG);
  }

  function getAllUserArticles () {
    return $http.get(url + 'articles', HEROKU.CONFIG);
  }

  // CAN USED FILTERED EMAILS FROM SERVICE TO SEND TO A SEGMENT
  // WOULD NEED TO CHANGE THIS FUNCTION AND THE CONTROLLER FUNCTION
  // TO PASS IN THE SEGMENT OF EMAILS

  
  function sendTest (content, preContent, postContent, newsletter) {
    console.log('SUBJECT:', newsletter.name);
    console.log('EMAIL IS TO:', newsletter.to);
    // console.log('ALL RELEVANT SUBSCRIBERS', relevantSubscribers);
    return $http.post(url + 'emails', 
      {
        html: preContent + content + postContent,
        subject: newsletter.name,
        email: newsletter.to
      },
      HEROKU.CONFIG);
  }

  

  function getMatchedSubscribers (subjects, subscribers) {
    // console.log('SUBJECTS TO MATCH', subjects);
    // console.log('ALL SUBSCRIBERS', subscribers);
    let rawList = [];
    let segmentEmails = [];
    let numberOfSubjects = subjects.length;
    // console.log('SUBJECT COUNT', numberOfSubjects);
    subscribers.forEach( function (subscriber) {  
      subjects.forEach( function (subject) {
        if ( subscriber.subject_names.includes(subject)  ){
          segmentEmails.push(subscriber.email);
        }
      });
    });
    // console.log('BEFORE', segmentEmails);


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
    // console.log('FILTERED', filteredSegment);


    // ALERT USER THAT NO SUBSCRIBERS MATCH CRITERIA
    // if (filteredSegment.length < 1) {
    //   alert('No subscribers match selected subjects');
    // }

    // CONVERT EMAILS TO A STRING WITH , SPACE
    let listOfEmails = filteredSegment.toString().split(',').join(', ');
    console.log('SEGMENTED TO FIELD:', listOfEmails);

    // SET PROPERTY OF NEWSLETTER SERVICE TO PASS TO SEND FUNCTION 
    this.segmentEmails = listOfEmails;
  }
  // End of getMatchedSubscribers Function


  



  // *** --- SEND ALL CONTROLLER START --- ***

  // *** --- SENDS ALL EMAILS TO ALL SUBSCRIBERS --- ***
  function blastList (subject) {

    return $http.post(url + 'newsletters', 
      {
        subject: subject
      },
      HEROKU.CONFIG);
  }
  // *** --- SEND ALL CONTROLLER END --- ***





  
  // *** --- NOT IN USE, COMPLETED BEFORE BACKEND WAS SET UP FOR SEND ALL CONTROLLER --- ***
  
  // this.getAllArticles = getAllArticles;
  // this.getArticles = getArticles;
  // this.constructMailer = constructMailer;
  // this.getContent = getContent;
  // this.sendAllEmails = sendAllEmails;


  // function constructMailer () {
  //   console.log('constructMailer');
  // } 

  // function getContent (subscriberId) {
  //   return $http.get(url + '/subscribers/' + subscriberId + '/' + 'articles', HEROKU.CONFIG); 
  // }

  // function getArticles (subscriberIds) {
  //   subscriberIds.forEach( function(subscriberId) {
  //     getContent(subscriberId).then( (response) => {
  //       self.emailContent.push(response.data.subscriber);
  //     });
  //   });
  // }

  // function getAllArticles (subscribers) {
  //   console.log('SUBSCRIBERS IN GET ALL ARTICLES', subscribers);
  //   subscribers.forEach( function (subscriber) {
  //     // console.log(subscriber);
  //     let subscriberId = subscriber.id;
  //     self.subscriberIds.push(subscriberId);
  //     console.log(self.subscriberIds);
  //     // getArticles(subscriberId);
  //   });
  // }


  // function sendAllEmails (emailObject) {
  //   console.log(emailObject);
  //   return $http.post(url + 'emails', 
  //   {
  //     html: emailObject.html,
  //     subject: emailObject.subject,
  //     email: emailObject.email
  //   },
  //   HEROKU.CONFIG);
  // } 

};

NewsletterService.$inject = ['$state', '$http', 'HEROKU'];

export default NewsletterService;     