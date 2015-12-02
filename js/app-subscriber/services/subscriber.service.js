let SubscriberService = function($http, HEROKU, $cookies) {
  
  let url = HEROKU.URL + 'subscribers';

  this.addSubscriber = addSubscriber;
  this.getAllSubscribers = getAllSubscribers;
  // this.editSubscriber    = editSubscriber;

  function addSubscriber (subObj) {
    this.email = subObj.email;
    this.subject_names = subObj.subject_names;
    let sub = new Subscriber(subObj);
    console.log(sub);
    return $http.post(url, HEROKU.CONFIG);
  }

  function getAllSubscribers () {
    return $http.get(url, HEROKU.CONFIG);
  }

  function setHeaders () {
    HEROKU.CONFIG.headers['auth_token'] = $cookies.get('auth_token');
    // user.auth;
    HEROKU.CONFIG.headers['user_id'] = $cookies.get('user_id');
    // token;
  } 

};

SubscriberService.$inject = ['$http', 'HEROKU', '$cookies'];

export default SubscriberService;