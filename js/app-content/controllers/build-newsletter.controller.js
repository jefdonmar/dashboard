let BuildNewsletterController = function($state, $scope, NewsletterService) {
  
  console.log('BuildNewsletterController is working');

  let vm = this; 
  vm.getSubjectsForNewsletter = getSubjectsForNewsletter;
  vm.articles = articles;

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
        });
      });
    });
  }

};

BuildNewsletterController.$inject = ['$state','$scope', 'NewsletterService'];

export default BuildNewsletterController;  