import angular from 'angular';

// CONTROLLERS
import AddArticleController from './controllers/add-article.controller';
import ViewArticlesController from './controllers/view-articles.controller';
import SingleArticleController from './controllers/view-single-article.controller';

// SERVICES
import ArticleService from './services/article.service';

// DIRECTIVES


angular
  .module('app.content', [])
  // CONTROLLERS
  .controller('AddArticleController', AddArticleController)
  .controller('ViewArticlesController', ViewArticlesController)
  .controller('SingleArticleController', SingleArticleController)
  // SERVICES
  .service('ArticleService', ArticleService)
  // DIRECTIVES
;