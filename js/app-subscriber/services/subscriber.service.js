let SubscriberService = function($http, HEROKU) {
  
  let url = HEROKU.URL + 'classes/subscriber';

  this.addSubscriber     = addSubscriber;
  this.editSubscriber    = editSubscriber;
  this.getAllSubscribers = getAllSubscribers;


  function Subscriber (subObj) {
    this.firstName = subObj.firstName;
    this.lastName  = subObj.lastName;
    this.email     = subObj.email;
  }

  function addSubscriber (subObj) {
    let sub = new Subscriber(subObj);
    console.log('Subscriber has been added');
    console.log(sub);
    return $http.post(url, sub, HEROKU.CONFIG);
  }

};

SubscriberService.$inject = ['$http', 'HEROKU'];

export default SubscriberService;