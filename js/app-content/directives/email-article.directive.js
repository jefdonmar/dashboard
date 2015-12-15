let emailArticle = function(ArticleService, $compile, NewsletterService) {
  
  return {

    restrict: 'A', // Restrict to attribute only
    replace: true, // Replace as opposed to inserting into
    scope: {
      article: '='
    },
    // transclude: true,
    // controller: 'SubscriberRowController as vm', // Not needed?
    template: `
     <table style="border: none;background-color: white;">
        <tr width="600" style="padding = 0px;">
          <td width="100%" style="padding = 0px;" >
            <h5 style="border-bottom: 1px solid black; padding-bottom: 3px;">
              {{ article.title }}
            </h5>
          </td>
        </tr>
        <tr width="600" style="background-color: white;">
          <td  width="100%">
            <img src="{{ article.media }}">
          </td>
        </tr>
        <tr width="600" style="background-color: white;">
          <td  width="100%">
            <p>{{ article.content }}</p>
          </td>
        </tr>
      </table>
    `,
    link: function (scope, element, attrs) {
      // console.log(element[0].innerHTML);
      var template = angular.element(element[0].innerHTML);
      var linkFunction = $compile(template);
      var content = linkFunction(scope);

      setTimeout( function () {
        NewsletterService.tempContent.push(content[0].innerHTML);
        NewsletterService.sendAllContent.push(content[0].innerHTML);
        console.log(content[0].innerHTML);
        // console.log(NewsletterService.tempContent);
      }, 0);
    }
  };

};

emailArticle.$inject = ['ArticleService', '$compile', 'NewsletterService'];

export default emailArticle;


 // <tr ng-show="{{ article.media }}">
 //          <td>
 //            <img src="{{ article.media }}">
 //            <button>Click to upload</button>
 //          </td>
 //        </tr>