let UserService = function($http, HEROKU) {
  
  // Get actual Heroku route from Backend
  // let url = HEROKU.URL + '/user';

  console.log('Hello from the UserService');

};

UserService.$inject = ['$http', 'HEROKU'];

export default UserService;