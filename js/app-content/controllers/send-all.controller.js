let SendAllController = function($scope, NewsletterService) {
  
  console.clear();
  console.log('SendAllController');

  let vm = this;

  let subscribers = [];

  vm.sendToAll = sendToAll;
  vm.getAllArticles = getAllArticles;
  vm.previewEmail = previewEmail;

  function sendToAll (subscribers) {
    console.log('TEST');
    console.log('SUBSCRIBERS SENT', subscribers);
  }

  activate ();

  function activate () {
    NewsletterService.getAllSubscribers().then( (response) => {
      // console.log(response);
      let allSubscribers = response.data.subscriber;
      console.log(allSubscribers); 
      allSubscribers.forEach( function(subscriber) {
        subscribers.push(subscriber);
      });
      console.log('AFTER SUBSCRIBERS', subscribers);
      vm.subscribers = subscribers;
    });
  }

  function getAllArticles (subscribers) {
    NewsletterService.getAllArticles(subscribers);
    let subscriberIds = NewsletterService.subscriberIds;
    console.clear();
    console.log(subscriberIds);
    NewsletterService.getArticles(subscriberIds);
    setTimeout( function () {
      // console.log('CONTENT', NewsletterService.emailContent);
      let content = NewsletterService.emailContent;
      console.log('CONTENT', content);
    }, 5000);
  }
  
  console.log(NewsletterService);

  function previewEmail () {  
    console.log(NewsletterService);
    setTimeout( function () {
      console.log('CONTROLLER', NewsletterService.contentTest);
      $scope.articles = NewsletterService.contentTest;
    }, 2000);
  }

};

SendAllController.$inject = ['$scope', 'NewsletterService'];

export default SendAllController;