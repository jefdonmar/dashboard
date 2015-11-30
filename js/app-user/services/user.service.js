let UserService = function($http, HEROKU, $cookies, $state) {
  
  // Get actual Heroku route from Backend
  // let url = HEROKU.URL + '/user';

  console.log('Hello from the UserService');

  // FUNCTIONS TO DEFINE
  this.signup    = signup;
  this.login     = login;
  // this.storeAuth = storeAuth;
  // this.checkAuth = checkAuth;

  // SERVICE FUNCTIONS
  function User (userObj) {
    this.firstName   = userObj.firstName;
    this.lastName    = userObj.lastName;
    this.email       = userObj.email;
    this.companyName = userObj.companyName;
    this.username    = userObj.username;
    this.password    = userObj.password;
  }

  // Re-purpose this based on requirements of our Heroku App
  // function storeAuth (user) {
  //   $cookies.put('streamline-sessionToken', user.sessionToken);
  //   $cookies.put('streamline-user', user.id);
  //   setHeaders(user.sessionToken);
  //   $state.go('root.home');
  // }

  // function checkAuth (user) {
  //   let t = $cookies.get('streamline-sessionToken');
  //   if (t) {
  //     setHeaders(t);
  //   } else {
  //     $state.go('root.login');
  //   }
  // }

  // ^^^ Re-purpose this based on requirements of our Heroku App ^^^


  // UPDATE based on changes above -- setHeaders is defined there 
  // Name will be defined by our Heroku app
  // function setHeaders (token) {
  //   HEROKU.CONFIG.headers['Auth_Token'] = token;
  // } 

  function signup (userObj) {
    let user = new User(userObj);
    console.log('User has been added');
    console.log(user);
    // return $http.post(url, user, HEROKU.CONFIG);
  }

  // function login (userObj) {
  //   return $http.post(url + 'login', userObj, {
  //     headers: HEROKU.CONFIG.headers,
  //     data: userObj
  //   });
  // }


};

UserService.$inject = ['$http', 'HEROKU', '$cookies', '$state'];

export default UserService;