let BuildSegmentController = function($scope) {
  
  console.log('BuildSegmentController is working');

  let vm = this; 

  $scope.subject_names = [
   'Football',
   'Baseball',
   'Basketball',
   'Soccer',
   'Hockey'
  ]; 

  function getSubscriberBySubject (subjectNames) {
    console.log('Supposed to add now');
    SubscriberService.addSubscriber(subObj).then( (res)=>{
      console.log(res);
      $state.go('root.home');
    });
  }

};

BuildSegmentController.$inject = ['$scope'];

export default BuildSegmentController;  