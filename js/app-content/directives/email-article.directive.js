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
      <tr>
        <td>{{ article.title }}</td>
        <td>{{ article.content }}</td>
      </tr>
    `,
    link: function (scope, element, attrs) {
    }
  };

};

emailArticle.$inject = ['ArticleService'];

export default emailArticle;