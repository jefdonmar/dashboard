let SendAllController = function($scope, NewsletterService) {
  
  console.clear();
  console.log('SendAllController');

  let vm = this;

  let subscribers = [];

  vm.sendToAll = sendToAll;

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

};

SendAllController.$inject = ['$scope', 'NewsletterService'];

export default SendAllController;