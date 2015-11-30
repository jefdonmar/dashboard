let AddSubscriberController = function($state, $scope, SubscriberService) {
  
  // console.log('Hello from the add subscriber controller');

  // set view model to this object
  let vm = this;

  // set of functions we will define in the controller
  vm.addSubscriber = addSubscriber;
  vm.validateEmail = validateEmail;
  vm.subjects = getSubjects();

  function getSubjects () {
    var subjects = ['Football', 'Baseball', 'Basketball', 'Soccer', 'Hockey'];
    return subjects;
  }

  console.log(vm.subjects);


  // use the form inputs to add a subscriber to the database

  function addSubscriber (subObj) {
    console.log('Supposed to add now');
    SubscriberService.addSubscriber(subObj).then( (response)=>{
      console.log(response);
      $state.go('root.home');
    });
  }

  // watch the email entry field in the form and validate @ symbol with error msg
  $scope.$watch('sub.email', function (newVal) {

    if (!newVal) return;

    if (!validateEmail(newVal)) {
      $scope.sub.emailError = 'Email needs an @ symbol';
      return console.log('Email needs an @ symbol');
    } else {
      $scope.sub.emailError = undefined;
    }

  });


  function validateEmail (field) {
    return (field.indexOf('@') >= 0) ? true : false;
  }

};

AddSubscriberController.$inject = ['$state', '$scope', 'SubscriberService'];

export default AddSubscriberController;