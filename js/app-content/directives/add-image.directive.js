let addImage = function(ArticleService, UploadService) {
  
  console.log('add-image directive');

  return {

    restrict: 'E', // Restrict to attribute only
    replace: true, // Replace as opposed to inserting into
    scope: {
      article: '='
    },
    // transclude: true,
    // controller: 'SubscriberRowController as vm', // Not needed?
    templateUrl: 'templates/app-content/add-image-form.tpl.html',
    link: function (scope, element, attrs) {
      element.on('submit', function () {
        let file = element.find('input')[0].files[0];
        scope.article = file;
        // UploadService.upload(file, scope.article).then( (res) => {
        // ArticleService.addImage(file, scope);
      });
    }
  };

};

addImage.$inject = ['ArticleService', 'UploadService'];

export default addImage;      