let BuildNewsletterController = function($state, $scope, NewsletterService) {
  
  console.log('BuildNewsletterController is working');

  let vm = this; 
  vm.getSubjectsForNewsletter = getSubjectsForNewsletter;

  let articles = [];

  $scope.subjects = [
   'Football',
   'Baseball',
   'Basketball',
   'Soccer',
   'Hockey'
  ]; 

  function getSubjectsForNewsletter (newsObj) {
    console.log(newsObj);
    console.log(newsObj.subjectNames);
    let subjects = newsObj.subjectNames;
    subjects.forEach( function(subject) {
      NewsletterService.getSubjects(subject).then( (response) => {
        console.log(response.data.subject.articles);
        let newArticles = response.data.subject.articles;
        newArticles.forEach(function (article) {
          console.log(article);
          articles.push(article);
          console.log(articles);
          $scope.articles = articles;
        });
      });
    });
  }

};

BuildNewsletterController.$inject = ['$state','$scope', 'NewsletterService'];

export default BuildNewsletterController;  