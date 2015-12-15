let SendAllController = function($scope, NewsletterService, $state) {
  
  console.clear();
  console.log('SendAllController');

  let vm = this;

  let subscribers = [];

  vm.sendToAll = sendToAll;
  vm.getAllArticles = getAllArticles;
  vm.nextStep = nextStep;
  vm.compileContent = compileContent;
  vm.previewEmail = previewEmail;
  vm.constructMailers = constructMailers;
  vm.checkMe = checkMe;

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

    // Set delay so the function has time to run

    setTimeout( function () {
      // console.log('CONTENT', NewsletterService.emailContent);
      let content = NewsletterService.emailContent;
      console.log('CONTENT', content);
      console.log('SUBSCRIBERS', subscribers);
      nextStep(content, subscribers);
    }, 5000);

  }

  let collection = [];

  function nextStep (content, subscribers) {
    console.clear();
    console.log('Next step');
    vm.test = 'test';
    console.log('CONTENT', content);
    console.log('SUBSCRIBERS', subscribers);
    content.forEach( function (setOfArticles) {
      console.log('ARTICLE SET', setOfArticles);
      // $scope.articles = [];
      // console.log('BEFORE', $scope.articles);
      let content = setOfArticles.articles;
      collection.push(content);
    });
    setTimeout( function () {
      console.log(collection);
    }, 3000);
  }

  function compileContent(collection) {
    console.log('COMPILER', collection[0]);
  }

  function constructMailers (subscribers, collection) {

    collection.forEach( function (arr){
      console.log('ARRAY OF ARTICLES', arr);
      $scope.articles = arr;
    });

  }

  // need a button for the data to compile 
  function previewEmail () {
    compileContent(collection);
    $scope.articles = collection[0];
  }

  function sendToAll () {
    console.clear();
    console.log('CLICK');
    console.log('COLLECTION', collection);
    console.log('SUBSCRIBERS', subscribers);
    constructMailers( subscribers, collection);
  }

  function checkMe () {
    console.log('CHECK', NewsletterService.sendAllContent);
  }


  // let mailers = [];

  // function Mailer (mailer, subscriber) {
  //   this.html = mailer.html;
  //   this.subject = mailer.subject;
  //   this.email = subscriber.email;
  //   this.mailer = mailer;
  // }

};

SendAllController.$inject = ['$scope', 'NewsletterService', '$state'];

export default SendAllController;