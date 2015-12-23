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
  this.getArticles         = getArticles;
  this.importSubscribers   = importSubscribers;

  
  function importSubscribers (fileObj) {

    console.log('TEST LOG', fileObj);

    let formData = new FormData();
    formData.append('fileimport', fileObj);
    HEROKU.CONFIG.headers['Content-Type'] = undefined;
    return $http.post(url + '/' + 'create_by_csv', formData, HEROKU.CONFIG);

  }

  function addSubscriber (subObj) {
    let sub = new Subscriber(subObj);
    console.log(sub);
    return $http.post(url, sub, HEROKU.CONFIG);
  }

  function getAllSubscribers () {
    return $http.get(url, HEROKU.CONFIG);
  }

  function deleteSubscriber (subscriberId) {
    console.log(subscriberId);
    return $http.delete(url + '/' + subscriberId, HEROKU.CONFIG);
  }

  function getSingleSubscriber (subscriberId) {
    console.log(subscriberId);
    return $http.get(url + '/' + subscriberId, HEROKU.CONFIG);
  }

  function editSubscriber (subscriber) {
    console.log(subscriber);
    return $http.put(url + '/' + subscriber.id, subscriber, HEROKU.CONFIG);
  }

  function updateSubscribers (subscriber) {
    return $http.put(url + '/' + subscriber.id, subscriber, HEROKU.CONFIG);
  }

  // function setHeaders () {
  //   HEROKU.CONFIG.headers['auth_token'] = $cookies.get('auth_token');
  //   // user.auth;
  //   HEROKU.CONFIG.headers['user_id'] = $cookies.get('user_id');
  //   // token;
  // } 

  function getArticles (subscriberId) {
    return $http.get(url + '/' + subscriberId + '/' + 'articles', HEROKU.CONFIG);
  }

};

SubscriberService.$inject = ['$http', 'HEROKU', '$cookies'];

export default SubscriberService;