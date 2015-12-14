let DashboardService = function($http, HEROKU) {
  
  let subscriberURL = HEROKU.URL + 'subscribers';
  let articleURL = HEROKU.URL + 'articles';
  let months = [{Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6, Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12}];

  function Subscriber (subObj) {
    this.email = subObj.email;
    this.subject_names = subObj.subject_names.toString();
  }

  this.getAllSubscribers = getAllSubscribers;
  this.cleanDates        = cleanDates;
  this.getAllArticles    = getAllArticles;

  this.addedToday = [];

  function getAllSubscribers () {
    return $http.get(subscriberURL, HEROKU.CONFIG);
  }

  function cleanDates (subscriber) {
    subscriber.created_at = new Date (subscriber.created_at);
    return $http.put(subscriberURL + '/' + subscriber.id, subscriber, HEROKU.CONFIG);
  }

  function getAllArticles () {
    console.log('getAllArticles function is called');
    return $http.get(articleURL, HEROKU.CONFIG);
  }

};

DashboardService.$inject = ['$http', 'HEROKU'];

export default DashboardService;