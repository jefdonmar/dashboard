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
        <tr width="100%" style="padding = 5px;">
          <td width="100%" style="padding = 5px;">
            <h5 style="border-bottom: 2px solid black; padding-bottom: 3px; font-size: 1.4em; margin-top: 10px; margin-bottom: 1px;">
              {{ article.title }}
            </h5>
          </td>
        </tr>
        <tr width="100%" style="background-color: white; padding: 10px;">
          <td width="90%" style="text-align: center; display: block; margin: 5px auto;">
            <img width="80%" src="{{ article.media }}">
          </td>
        </tr>
        <tr width="100%" style="background-color: white;">
          <td width="100%" style="padding = 5px; padding-top: 10px;">
            <p width="100%" style="font-size: 1.2em;">{{ article.content }}</p>
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
        // console.log(content[0].innerHTML);
        // console.log(NewsletterService.tempContent);
      }, 0);
    }
  };

};

emailArticle.$inject = ['ArticleService', '$compile', 'NewsletterService'];

export default emailArticle;


// OLD STYLING CODE


// PADDING AND WIDTHS OF ROWS
// <tr width="600" style="padding = 0px;">
//           <td width="100%" style="padding = 0px;" >








 // <tr ng-show="{{ article.media }}">
 //          <td>
 //            <img src="{{ article.media }}">
 //            <button>Click to upload</button>
 //          </td>
 //        </tr>