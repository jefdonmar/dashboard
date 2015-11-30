import angular from 'angular';

// CONTROLLERS
import AddArticleController from './controllers/add-article.controller';

// SERVICES
import ArticleService from './services/article.service';

// DIRECTIVES


angular
  .module('app.content', [])
  // CONTROLLERS
  .controller('AddArticleController', AddArticleController)
  // SERVICES
  .service('ArticleService', ArticleService)
  // DIRECTIVES
;