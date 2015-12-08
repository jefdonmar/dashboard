let addImage = function(ArticleService, UploadService) {
  
  console.log('add-image directive');

  return {

    restrict: 'E', // Restrict to attribute only
    replace: true, // Replace as opposed to inserting into
    scope: {
      a: '='
    },
    // transclude: true,
    controller: 'AddArticleController as vm', // Not needed?
    template: `
      <form class="uploadForm">
        <input type="file" id="articleImg" ng-model="article.media">
        <button ng-click="imageAdded=true">Add Image</button>
      </form>
    `,
    link: function (scope, element, attrs) {
      element.on('submit', function () {
        let file = element.find('input')[0].files[0];
        console.log(file);
        scope.$parent.vm.addImage(file);
      });
    }
  };

};

addImage.$inject = ['ArticleService', 'UploadService'];

export default addImage;      