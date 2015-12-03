import angular from 'angular';

// CONTROLLERS
import AddArticleController from './controllers/add-article.controller';
import ViewArticlesController from './controllers/view-articles.controller';

// SERVICES
import ArticleService from './services/article.service';

// DIRECTIVES


angular
  .module('app.content', [])
  // CONTROLLERS
  .controller('AddArticleController', AddArticleController)
  .controller('ViewArticlesController', ViewArticlesController)
  // SERVICES
  .service('ArticleService', ArticleService)
  // DIRECTIVES
;