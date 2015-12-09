let emailArticle = function(ArticleService) {
  
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
        <tr width="600"  style="background-color: white; float: right;">
          <td height:"10" width="100%" style="padding-top: 0px; padding-bottom:0px; color: blue;">
            {{ article.subject_names }}
          </td>
        </tr>
        <tr ng-show="{{ article.media }}">
          <td>
            <img src="{{ article.media }}">
            <button>Click to upload</button>
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
    }
  };

};

emailArticle.$inject = ['ArticleService'];

export default emailArticle;