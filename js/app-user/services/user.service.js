let UserService = function($http, HEROKU, $cookies, $state) {
  
  // Get actual Heroku route from Backend
  let url = HEROKU.URL;

  // console.log('Hello from the UserService');

  // FUNCTIONS TO DEFINE
  this.signup    = signup;
  this.login     = login;
  this.storeAuth = storeAuth;
  this.setHeaders = setHeaders;
  this.checkAuth = checkAuth;
  this.sendKey = sendKey;
  this.logout = logout;
  this.getUser = getUser;

  function getUser () {
    return $http.get(url + 'users', HEROKU.CONFIG);
  }

  function sendKey (user) {
    console.log(user.key);
    return $http.put(url + 'users',
      {
        name: user.name,
        email: user.email ,
        mandrill_api: user.mandrill_api
      }, HEROKU.CONFIG);
  }

  function logout () {
    $cookies.remove('auth_token');
    $cookies.remove('user_id');
    HEROKU.CONFIG.headers['auth_token'] = null;
    HEROKU.CONFIG.headers['user_id'] = null;
    $state.go('root.login');
  }


  // SERVICE FUNCTIONS
  function User (userObj) {
    // name is company name
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

  function checkAuth () {
    let t = $cookies.get('auth_token');
    HEROKU.CONFIG.headers['auth_token'] = t;
    if (t) {
      return console.log('Headers were checked');
    } else {
      $state.go('root.login');
    }
  }

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

  function login (userObj) {
    console.log('User should have been logged In');
    console.log(userObj);
    return $http.post(url + 'login', userObj, HEROKU.CONFIG);
  }


};

UserService.$inject = ['$http', 'HEROKU', '$cookies', '$state'];

export default UserService;