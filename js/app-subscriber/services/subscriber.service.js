let SubscriberService = function($http) {
  
  // inject HEROKU
  // let url = HEROKU.URL + '';

  this.addSubscriber  = addSubscriber;
  this.editSubscriber = editSubscriber;


  function Subscriber (subObj) {
    this.firstName = subObj.firstName;
    this.lastName  = subObj.lastName;
    this.email     = subObj.email;
  }

  function addSubscriber (subObj) {
    let sub = new Subscriber(subObj);
    // return $http.post(url, sub, HEROKU.CONFIG);
    console.log('Subscriber has been added');
    console.log(sub);
  }

};

SubscriberService.$inject = ['$http'];

export default SubscriberService;