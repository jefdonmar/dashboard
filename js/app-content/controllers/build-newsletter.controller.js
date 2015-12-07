let BuildNewsletterController = function($scope, NewsletterService) {
  
  console.log('BuildNewsletterController is working');

  let vm = this; 
  vm.getSubjectsForNewsletter = getSubjectsForNewsletter;

  $scope.subjects = [
   'Football',
   'Baseball',
   'Basketball',
   'Soccer',
   'Hockey'
  ]; 

  function getSubjectsForNewsletter (newsObj) {
    console.log(newsObj);
    NewsletterService.getSubjects(newsObj).then( (response) => {
      console.log(response);
    });
    // SubscriberService.addSubscriber(subObj).then( (res)=>{
    //   console.log(res);
    //   $state.go('root.home');
    // });
  }

};

BuildNewsletterController.$inject = ['$scope', 'NewsletterService'];

export default BuildNewsletterController;  