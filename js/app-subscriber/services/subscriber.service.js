let SubscriberService = function($http, HEROKU, $cookies) {
  
  let url = HEROKU.URL + 'subscribers';

  function Subscriber (subObj) {
    this.email = subObj.email;
    this.subject_names = subObj.subject_names.toString();
  }

  this.addSubscriber       = addSubscriber;
  this.getAllSubscribers   = getAllSubscribers;
  this.deleteSubscriber    = deleteSubscriber;
  this.getSingleSubscriber = getSingleSubscriber;
  this.editSubscriber      = editSubscriber;
  this.updateSubscribers   = updateSubscribers;

  function addSubscriber (subObj) {
    let sub = new Subscriber(subObj);
    console.log(sub);
    return $http.post(url, sub, HEROKU.CONFIG);
  }

  function getAllSubscribers () {
    return $http.get(url, HEROKU.CONFIG);
  }

  function deleteSubscriber (subscriber) {
    console.log(subscriber);
    return $http.delete(url + '/' + subscriber.id, HEROKU.CONFIG);
  }

  function getSingleSubscriber (subscriberId) {
    console.log(subscriberId);
    return $http.get(url + '/' + subscriberId, HEROKU.CONFIG);
  }

  function editSubscriber (subscriber) {
    console.log(subscriber);
    return $http.put(url + '/' + subscriber.id, subscriber, HEROKU.CONFIG);
  }

  function updateSubscribers (subscribers) {
    return $http.put(url, subscribers, HEROKU.CONFIG);
  }

  // function setHeaders () {
  //   HEROKU.CONFIG.headers['auth_token'] = $cookies.get('auth_token');
  //   // user.auth;
  //   HEROKU.CONFIG.headers['user_id'] = $cookies.get('user_id');
  //   // token;
  // } 

};

SubscriberService.$inject = ['$http', 'HEROKU', '$cookies'];

export default SubscriberService;