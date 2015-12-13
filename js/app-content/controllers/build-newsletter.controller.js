let BuildNewsletterController = function($state, $scope, NewsletterService) {
  
  console.log('BuildNewsletterController is working');

  let vm = this; 
  vm.getSubjectsForNewsletter = getSubjectsForNewsletter;
  vm.sendNews = sendNews;
  vm.getAllSubscribers = getAllSubscribers;



  let newsletter = {};
  let articles = [];
  let subscribers = [];
  let allEmails = [];

  $scope.subjects = [
   'Football',
   'Baseball',
   'Basketball',
   'Soccer',
   'Hockey'
  ]; 

  getAllSubscribers();

  function getAllSubscribers () {
    NewsletterService.getAllSubscribers().then( (response) => {
      // console.log(response);
      let allSubscribers = response.data.subscriber;
      vm.subscribers = allSubscribers;
      subscribers = allSubscribers;
      subscribers.forEach( function (subscriber) {
        allEmails.push(subscriber.email);
      });
      console.log('ALL SUBSCRIBERS', subscribers);
      console.log('EMAILS', allEmails);
    });
  }

  function getSubjectsForNewsletter (newsObj) {
    newsletter.name = newsObj.name;
    // newsletter.to = newsObj.to;
    console.log('NEWSLETTER', newsletter);
    let subjects = newsObj.subjectNames;

    // Get the right subcribers associated with the subjects
    NewsletterService.getMatchedSubscribers(subjects, subscribers);


    // Populate newsletter preview with relevant subjects
    subjects.forEach( function(subject) {
      NewsletterService.getSubjects(subject).then( (response) => {
        // console.log(response.data.subject.articles);
        let newArticles = response.data.subject.articles;
        newArticles.forEach(function (article) {
          articles.push(article); 
          $scope.articles = articles;
        });
      });
    });
  }

  function sendNews (newsletter, sub) {
    console.clear();
    console.log('TEST', NewsletterService.segmentEmails);
    console.log('Newsletter sent here');
    console.log(newsletter.name);
    // console.log(newsletter.to);
    let content = NewsletterService.tempContent.join();
    let preContent = NewsletterService.preContent;
    let postContent = NewsletterService.postContent;
    let emailRecipients = NewsletterService.segmentEmails;
    NewsletterService.sendContent(content, preContent, postContent, newsletter, emailRecipients).then( (response) => {
      console.log(response);
    });
  }


};

BuildNewsletterController.$inject = ['$state','$scope', 'NewsletterService'];

export default BuildNewsletterController;  