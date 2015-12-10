let emailArticle = function(ArticleService, $compile) {
  
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
            <p>{{ article.content }}</p>
          </td>
        </tr>
      </table>
    `,
    link: function (scope, element, attrs) {
      console.log(element[0]);
      // console.log($compile(element[0])(scope));
    }
  };

};

emailArticle.$inject = ['ArticleService', '$compile'];

export default emailArticle;


 // <tr ng-show="{{ article.media }}">
 //          <td>
 //            <img src="{{ article.media }}">
 //            <button>Click to upload</button>
 //          </td>
 //        </tr>