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
    // console.log(newsObj);
    // console.log(newsObj.subjectNames);
    $scope.subjectsChosen = newsObj.subjectNames;
    NewsletterService.getSubjects(newsObj).then( (response) => {
      console.log(response);
      // once server is up, set articles and subjectsChosen based on response
      $scope.articles = response.data.articles;
    });
  }

};

BuildNewsletterController.$inject = ['$scope', 'NewsletterService'];

export default BuildNewsletterController;  