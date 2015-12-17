let WelcomeController = function($scope, $state, UserService) {
  
  console.log('Hello from the LoginController');

  // set view model to this object
  let vm = this;

  vm.blocks = [
    {
      heading: 'Manage Subscribers',
      blurb: 'Import contacts and better manage your outreach',
      picture: 'http://www.metia.com/media/1042734/marketing_automation_480x200.jpg',
      link: '#/view-subscribers'
    },
    {
      heading: 'Generate Content',
      blurb: 'Create, store and access your content all in one place',
      picture: 'http://govdelivery.com/wp-content/uploads/2014/06/Social-Icons-300x257.png',
      link: '#/view-articles'
    },
    {
      heading: 'Publish Articles',
      blurb: 'Send the right content to the right people at the right time',
      picture: 'https://i.vimeocdn.com/video/521596384_640.jpg',
      link: '#/send-all'
    },
    {
      heading: 'Track Performance',
      blurb: 'Keep a pulse on your business to stay ahead of the game',
      picture: 'http://www.smekdigital.com/wp-content/uploads/2015/03/email-marketing.jpg',
      link: '#/main-dashboard'
    }
  ];


};

WelcomeController.$inject = ['$scope', '$state', 'UserService'];

export default WelcomeController;