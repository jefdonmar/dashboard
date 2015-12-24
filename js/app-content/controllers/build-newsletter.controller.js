let BuildNewsletterController = function($state, $scope, NewsletterService, UserService) {
  
  console.log('BuildNewsletterController is working');

  let vm = this; 
  vm.getSubjectsForNewsletter = getSubjectsForNewsletter;
  vm.sendNews = sendNews;
  vm.getAllSubscribers = getAllSubscribers;

  let newsletter = {};
  let articles = [];
  let subscribers = [];
  let allEmails = [];

  $scope.logOut = logout;

  function logout () {
    console.log('LOGOUT CALLED');
    UserService.logout();
  }

  $scope.startOver = startOver;

  function startOver () {
    $state.reload();
  }

  // --- USER SERVICE PROVIDES ACCESS TO SUBJECT NAMES ---
  UserService.accessUserSubjects();
  $scope.subjects = UserService.userSubjects;

  // --- GETS ALL SUBSCRIBERS IN CASE WE USE DROPDOWN --- 
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


  // *** --- SENDS TEST TO ONLY NAME ENTERED --- ***
  function sendNews (newsletter) {
    console.clear();
    console.log('TEST', NewsletterService.segmentEmails);
    console.log('Newsletter sent here');
    console.log(newsletter.name);
    // console.log(newsletter.to);
    let content = NewsletterService.tempContent.join();
    let preContent = NewsletterService.preContent;
    let postContent = NewsletterService.postContent;
    // let relevantSubscribers = NewsletterService.segmentEmails;
    NewsletterService.sendTest(content, preContent, postContent, newsletter).then( (response) => {
      console.log(response);
    });
  }
  // *** --- ***

  function getSubjectsForNewsletter (newsObj) {
    if (!newsObj) {
      alert('Subject line and email address are required');
      location.reload();
    }

    newsletter.name = newsObj.name;
    newsletter.to = newsObj.to;
    console.log('NEWSLETTER', newsletter);
    let subjects = newsObj.subjectNames;

    // *** --- USED IF WE WANT TO SEND TO A SELECT SEGMENT --- ***

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
      $scope.hasPreviewed = true;
    });
  }

};

BuildNewsletterController.$inject = ['$state','$scope', 'NewsletterService', 'UserService'];

export default BuildNewsletterController;  