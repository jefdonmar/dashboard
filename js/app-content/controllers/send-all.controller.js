let SendAllController = function($scope, NewsletterService, $state, ArticleService, UserService) {
  
  console.clear();
  console.log('SendAllController');

  let vm = this;

  let subscribers = [];

  vm.sendToAll = sendToAll;
  vm.getAllArticles = getAllArticles;
  vm.nextStep = nextStep;
  vm.compileContent = compileContent;
  vm.previewEmail = previewEmail;
  vm.constructMailers = constructMailers;
  vm.checkMe = checkMe;
  vm.build = build;
  vm.checkMatch = checkMatch;
  vm.buildNewsletters = buildNewsletters;
  vm.showBatch = showBatch;
  vm.sendAllEmails = sendAllEmails;
  vm.sendToFullList = sendToFullList;


  $scope.logOut = logout;

  function logout () {
    console.log('LOGOUT CALLED');
    UserService.logout();
  }

  activate ();

  function activate () {
    NewsletterService.getAllSubscribers().then( (response) => {
      // console.log(response);
      let allSubscribers = response.data.subscriber;
      console.log(allSubscribers); 
      allSubscribers.forEach( function(subscriber) {
        subscribers.push(subscriber);
      });
      console.log('AFTER SUBSCRIBERS', subscribers);
      vm.subscribers = subscribers;
    });

    NewsletterService.getAllUserArticles().then( (response) => {
      // console.log(response);
      let allUserArticles = response.data.article;
      console.log('TEST', allUserArticles); 
      vm.allUserArticles = allUserArticles;
    });
  }

  function getAllArticles (subscribers) {
    NewsletterService.getAllArticles(subscribers);
    let subscriberIds = NewsletterService.subscriberIds;
    console.clear();
    console.log(subscriberIds);
    NewsletterService.getArticles(subscriberIds);

    // Set delay so the function has time to run

    setTimeout( function () {
      // console.log('CONTENT', NewsletterService.emailContent);
      let content = NewsletterService.emailContent;
      console.log('CONTENT', content);
      console.log('SUBSCRIBERS', subscribers);
      nextStep(content, subscribers);
    }, 2000);

  }

  let collection = [];

  function nextStep (content, subscribers) {
    console.clear();
    console.log('Next step');
    vm.test = 'test';
    console.log('CONTENT', content);
    console.log('SUBSCRIBERS', subscribers);
    content.forEach( function (setOfArticles) {
      console.log('ARTICLE SET', setOfArticles);
      // $scope.articles = [];
      // console.log('BEFORE', $scope.articles);
      let content = setOfArticles.articles;
      collection.push(content);
    });
    setTimeout( function () {
      console.log(collection);
    }, 2000);
  }

  function compileContent(collection) {
    console.log('COMPILER', collection[0]);
  }

  let articleMatcher = [];

  function constructMailers () {

    NewsletterService.sendAllContent = [];

    ArticleService.getAllArticles().then( (response)=> {
      let allArticles = response.data.article;
      console.log(allArticles);
      $scope.articles = allArticles;
      vm.articles = allArticles;

      allArticles.forEach( function (article) {
        let articleObj = {};
        articleObj.id = article.id;
        articleObj.title = article.title;
        articleObj.content = article.content;
        articleObj.subject_names = article.subject_names;
        articleMatcher.push(articleObj);
      });
    });

  }

  // need a button for the data to compile 
  function previewEmail () {
    compileContent(collection);
    $scope.articles = collection[0];
  }

  function sendToAll () {
    console.clear();
    console.log('CLICK');
    console.log('COLLECTION', collection);
    console.log('SUBSCRIBERS', subscribers);
    constructMailers();
    setTimeout( function() {
      checkMe();
    }, 1000);
  }

  function checkMe () {
    console.log('CHECK', NewsletterService.sendAllContent);
    console.log('ARTICLE MATCHER', articleMatcher);
  }

  function build () {
    console.clear();
    console.log(articleMatcher);

    articleMatcher.forEach( function (article) {
      NewsletterService.sendAllContent.forEach ( function (codeString) {
        if ( (codeString.includes(article.title)) && (codeString.includes(article.content)) ) {
          article.htmlContent = codeString;
        }
      });
    });
  }

  function checkMatch() {
    console.log(articleMatcher);
  }

  let newsletterBatch = [];
  let preContent = NewsletterService.preContent;
  let postContent = NewsletterService.postContent;

  // let preContent = '<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><meta name="viewport" content="width=device-width"/></head><body><table class="body" style="width: 100%;"><tr><td class="center" align="center" valign="center"><p style="text-align: center;">Click to view in your browser</p></td></tr><tr><td class="wrapper"><table>';
  // let postContent = '</table></td></tr></table></body></html>';

  function buildNewsletters () {
    console.clear();
    console.log('newsletter builder');
    console.log(newsletterBatch);

    // BUILD A NEWSLETTER FOR EACH SUBSCRIBER
    subscribers.forEach( function (subscriber) {
      
      // CONSTRUCT AN OBJECT FOR EACH NEWSLETTER TO PUSH TO AN ARRAY OF EMAILS
      let emailNewsletter = {};

      // SET PROPERTIES YOU CAN - NEED TO FILL SUJECT IN WITH A FORM
      emailNewsletter.email = subscriber.email;
      emailNewsletter.subject = 'Test Subject Line';

      // CREATE AN EMPTY ARRAY FOR ALL ARTICLES, WILL PUSH CONTENT TO IT
      let allArticles = [];
      // COLLECT THE ARTICLE IDS NEEDED
      let articleIds = [];
    
      NewsletterService.getContent(subscriber.id).then( (response) => {
        console.log(response);
        let articles = response.data.subscriber.articles;
        console.log('ARTICLES', articles);
        articles.forEach( function (article) {
          articleIds.push(article.id);
          console.log('ARTICLEIDs', articleIds);
        });


      });

      // FOR EACH ARTICLE IN THE MATCHER ARRAY, PUSH HTML CODE INTO THE CONTENT PROPERTY
      setTimeout( function () {
        articleMatcher.forEach( function(article) {
          console.log('ARTICLE MATCHER ARTICLE', article);
          articleIds.forEach( function(articleId) {
            console.log('ARTICLE IDs SINGLE ID', articleId);
            if (articleId === article.id) {
              allArticles.push(article.htmlContent);
            }
          });  
        });
      }, 2000);

      // GIVE THE FUNCTION SOME TIME, THEN STRING TOGETHER CODE AND LOG IT OUT
      setTimeout( function () {
        console.log('ALL ARTICLES', allArticles);
        let articleContent = allArticles.join('');
        emailNewsletter.html = preContent + articleContent + postContent;
        console.log('EMAIL NEWSLETTER', emailNewsletter);
        newsletterBatch.push(emailNewsletter);
        showBatch();
      }, 5000);

    });

  }

  function showBatch() {
    console.log('NEWSLETTER BATCH', newsletterBatch);
    alert('Newsletters are ready to send');
  }

  function sendAllEmails () {
    newsletterBatch.forEach( function (emailObject) {
      NewsletterService.sendAllEmails(emailObject).then( (response) => {
        console.log(response);
      });
    });
  }

  function sendToFullList (subject) {
    NewsletterService.blastList(subject).then( (response) => {
      console.log('BLAST LIST', response);
    });
    vm.emailsSent = true;
    setTimeout( function () {
      $state.go('root.main-dashboard');
    }, 3000);
  }


  // let mailers = [];

  // function Mailer (mailer, subscriber) {
  //   this.html = mailer.html;
  //   this.subject = mailer.subject;
  //   this.email = subscriber.email;
  //   this.mailer = mailer;
  // }

};

SendAllController.$inject = ['$scope', 'NewsletterService', '$state', 'ArticleService', 'UserService'];

export default SendAllController;