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
import SendAllController from './controllers/send-all.controller';

// SERVICES
import ArticleService from './services/article.service';
import NewsletterService from './services/newsletter.service';
import UploadService from './services/upload.service';

// DIRECTIVES
import emailArticle from './directives/email-article.directive';
import addImage from './directives/add-image.directive';

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
  .controller('SendAllController', SendAllController)
  // SERVICES
  .service('ArticleService', ArticleService)
  .service('NewsletterService', NewsletterService)
  .service('UploadService', UploadService)
  // DIRECTIVES
  .directive('emailArticle', emailArticle)
  .directive('addImage', addImage)
;