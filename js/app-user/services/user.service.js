let UserService = function($http, HEROKU, $cookies, $state) {
  
  // Get actual Heroku route from Backend
  let url = HEROKU.URL;

  // console.log('Hello from the UserService');

  // FUNCTIONS TO DEFINE
  this.signup    = signup;
  // this.login     = login;
  this.storeAuth = storeAuth;
  // this.checkAuth = checkAuth;

  // SERVICE FUNCTIONS
  function User (userObj) {
    // -- COMMENTING OUR FIELDS NOT IN USE --
    // this.firstName   = userObj.firstName;
    // this.lastName    = userObj.lastName;
    // this.companyName = userObj.companyName;
    // this.username    = userObj.username;
    this.name        = userObj.name;
    this.email       = userObj.email;
    this.password    = userObj.password;
  }

  // Re-purpose this based on requirements of our Heroku App

  function storeAuth (user) {
    $cookies.put('auth_token', user.auth_token);
    $cookies.put('user_id', user.id);
    setHeaders();
    // $state.go('root.home');
  }

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
  
  function setHeaders () {
    HEROKU.CONFIG.headers['auth_token'] = $cookies.get('auth_token');
    // user.auth;
    HEROKU.CONFIG.headers['user_id'] = $cookies.get('user_id');
    // token;
  } 

  function signup (userObj) {
    let user = new User(userObj);
    console.log('User should have been added');
    console.log(user);
    return $http.post(url + 'signup', user, HEROKU.CONFIG);
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