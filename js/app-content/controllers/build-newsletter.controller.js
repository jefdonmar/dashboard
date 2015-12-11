let BuildNewsletterController = function($state, $scope, NewsletterService) {
  
  console.log('BuildNewsletterController is working');

  let vm = this; 
  vm.getSubjectsForNewsletter = getSubjectsForNewsletter;
  vm.sendNews = sendNews;
  vm.getAllSubscribers = getAllSubscribers;


  let articles = [];

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
      console.log(response);
      vm.subscribers = response.data.subscriber;
    });
  }

  function getSubjectsForNewsletter (newsObj) {
    console.log(newsObj);
    console.log(newsObj.subjectNames);
    let subjects = newsObj.subjectNames;
    subjects.forEach( function(subject) {
      NewsletterService.getSubjects(subject).then( (response) => {
        console.log(response.data.subject.articles);
        let newArticles = response.data.subject.articles;
        newArticles.forEach(function (article) {
          console.log(article);
          articles.push(article);
          console.log(articles);
          $scope.articles = articles;
        });
      });
    });
  }

  function sendNews () {
    console.clear();
    console.log('Newsletter sent here');
    let content = NewsletterService.tempContent;
    let preContent = NewsletterService.preContent;
    let postContent = NewsletterService.postContent;
    NewsletterService.sendContent(content, preContent, postContent).then( (response) => {
      console.log(response);
    });
  }


};

BuildNewsletterController.$inject = ['$state','$scope', 'NewsletterService'];

export default BuildNewsletterController;  