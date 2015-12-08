let UploadService = function($http, HEROKU) {
  
  this.upload = upload;

  function upload (file, article) {
    let formData = new FormData();
    formData.append('upload', file);
    // formData.append('details', JSON.stringify({ name: 'Tim' }));
  }
  

};

UploadService.$inject = ['$http', 'HEROKU'];

export default UploadService; 