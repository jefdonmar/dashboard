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
      <table width="100%" style="border: none;background-color: white;">
        <tbody>
          <tr width="600" style="padding = 0px;">
            <td width="100%" style="padding = 0px;" >
              <h5 ng-click="upload = !upload"
                style="border-bottom: 1px solid black; padding-bottom: 3px;">
                {{ article.title }}
              </h5>
            </td>
          </tr>
          <tr width="600"  style="background-color: white; float: right;">
            <td height:"50" width="100%">
              <p>{{ article.subject_names }}</p>
            </td>
          </tr>
          <tr ng-show="upload">
            <td>
              <img src="http://fpoimg.com/600x150">
              <button>Click to upload</button>
            </td>
          </tr>
          <tr width="600" style="background-color: white;">
            <td  width="100%">
              <p>{{ article.content }}</p>
            </td>
          </tr>
        </tbody>
      </table>
    `,
    link: function (scope, element, attrs) {
      console.log(element[0]);
      console.log(element[0].toString());
    }
  };

};

emailArticle.$inject = ['ArticleService'];

export default emailArticle;