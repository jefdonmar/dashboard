import angular from 'angular';
import 'checklist-model';

// CONTROLLERS
import AddArticleController from './controllers/add-article.controller';
import ViewArticlesController from './controllers/view-articles.controller';
import SingleArticleController from './controllers/view-single-article.controller';
import EditArticleController from './controllers/edit-article.controller';
import ArticleBySubjectController from './controllers/article-by-subject.controller';
import BuildNewsletterController from './controllers/build-newsletter.controller';
import PreviewNewsletterController from './controllers/preview-newsletter.controller';

// SERVICES
import ArticleService from './services/article.service';
import NewsletterService from './services/newsletter.service';

// DIRECTIVES


angular
  .module('app.content', ['checklist-model'])
  // CONTROLLERS
  .controller('AddArticleController', AddArticleController)
  .controller('ViewArticlesController', ViewArticlesController)
  .controller('SingleArticleController', SingleArticleController)
  .controller('EditArticleController', EditArticleController)
  .controller('ArticleBySubjectController', ArticleBySubjectController)
  .controller('BuildNewsletterController', BuildNewsletterController)
  .controller('PreviewNewsletterController', PreviewNewsletterController)
  // SERVICES
  .service('ArticleService', ArticleService)
  .service('NewsletterService', NewsletterService)
  // DIRECTIVES
;