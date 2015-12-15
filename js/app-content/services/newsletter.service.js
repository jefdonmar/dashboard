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
  this.sendContent = sendContent;
  this.getMatchedSubscribers = getMatchedSubscribers;
  this.getAllArticles = getAllArticles;
  this.getArticles = getArticles;
  this.constructMailer = constructMailer;
  this.eachEmail = eachEmail;
  this.getContent = getContent;
  // this.buildEmail = buildEmail;

  // FUNCTIONS

  function Newsletter (newsObj) {
    // this.newsName     = newsObj.name;
    this.subjects     = newsObj.subjectNames.toString();
  }

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

  function constructMailer () {
    console.log('constructMailer');
  } 

  // function buildEmail (articleArray) {
  //   articleArray.forEach ( function (article) {
  //     eachEmail.push(article);
  //     return eachEmail;
  //   });
  // }

  function Mailer (mailer, subscriber) {
    // this.html = mailer.html;
    // this.subject = mailer.subject;
    this.email = subscriber.email;
    this.mailer = mailer;
  }

  function getContent (subscriberId) {
    return $http.get(url + '/subscribers/' + subscriberId + '/' + 'articles', HEROKU.CONFIG); 
  }

  function getArticles (subscriberIds) {
    subscriberIds.forEach( function(subscriberId) {
      getContent(subscriberId).then( (response) => {
        self.emailContent.push(response.data.subscriber);
      });
    });
  }

  function getAllArticles (subscribers) {
    console.log('SUBSCRIBERS IN GET ALL ARTICLES', subscribers);
    subscribers.forEach( function (subscriber) {
      // console.log(subscriber);
      let subscriberId = subscriber.id;
      self.subscriberIds.push(subscriberId);
      console.log(self.subscriberIds);
      // getArticles(subscriberId);
    });
  }


  // .then( (response) => {
    
  //   let articles = response.data.subscriber.articles;
  //   console.log('ARTICLES', articles);
  //   mailerArticles.push(articles);
  //   console.log('MAILER ARTICLES', mailerArticles);

  //   mailerArticles.forEach( function (arrayOfArticles) {
  //     console.log('Hello');
  //     arrayOfArticles.forEach( function (article) {
  //       let articleContent = [];
  //       articleContent.push(article);
  //       console.log('ARTICLE CONTENT', articleContent);
  //       NewsletterService.contentTest = articleContent;
  //     });
  //     console.log(NewsletterService.contentTest);
  //   });
  //   console.log(NewsletterService.contentTest);
  // });

  // Still iterating over all subscribers

  // console.log('TEST SEND ALL CONTENT', sendAllContent);

  // let m = new Mailer (mailerArticles, subscriber);
  // console.log('INSTANCE OF MAILER CHECK', m);

  // NEED TO USE CONSTRUCTOR EVENTUALLY
  // let mailer = new Mailer (subscriber);
  // console.log('MAILER', mailer);

};

NewsletterService.$inject = ['$state', '$http', 'HEROKU'];

export default NewsletterService;     