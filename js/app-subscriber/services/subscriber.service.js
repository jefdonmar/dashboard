let SubscriberService = function($http, HEROKU) {
  
  let url = HEROKU.URL + 'classes/subscriber';

  this.addSubscriber = addSubscriber;
  this.getAllSubscribers = getAllSubscribers;
  // this.editSubscriber    = editSubscriber;

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

  function getAllSubscribers () {
    return $http.get(url, HEROKU.CONFIG);
  }



};

SubscriberService.$inject = ['$http', 'HEROKU'];

export default SubscriberService;