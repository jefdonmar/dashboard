let AboutUsController = function($scope) {
  
  console.log('AboutUsController');

  let vm = this;

  vm.team = [
    {
      name: 'Andrew Faircloth',
      pic: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAJEAAAAJGMwMTMwODdjLWQ3ZWUtNGEyMy04MDg0LTIxYzA4YzM4YTA1NA.jpg",
      github: "https://github.com/faircloth",
      linkedin: "https://www.linkedin.com/in/andrew-faircloth-3b905069",
      nickname: "Lightweight"
    },
    {
      name: 'Jeffrey Martín',
      pic: "https://files.slack.com/files-pri/T066DB5HT-F0GMVE1A9/pic.jpg",
      github: "https://github.com/jefdonmar",
      linkedin: "https://www.linkedin.com/in/jeffrey-martín-a753ab41",
      nickname: "One F Jeff"
    },
    {
      name: 'Robert Cramer',
      pic: "https://files.slack.com/files-pri/T066DB5HT-F0GJ7V160/prophoto.jpg",
      github: "https://github.com/robertcramer",
      linkedin: "https://www.linkedin.com/in/rbcramer",
      nickname: "Longfellow Deeds"
    },
    {
      name: 'Danny Barton',
      pic: "https://files.slack.com/files-pri/T066DB5HT-F0GJV65GA/slack_for_ios_upload.jpg",
      github: "https://github.com/dbarton8406",
      linkedin: "https://www.linkedin.com/in/daniel-barton-ba5a6310b",
      nickname: "Sugar"
    },
  ];

};

AboutUsController.$inject = ['$scope'];

export default AboutUsController;