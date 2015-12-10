import moment from 'moment';

let ViewSubscribersController = function($state, $scope, SubscriberService) {
  
  // set view model to this object
  let vm = this;

  // connect data to scope of the controller through view model
  vm.subscribers = [];

  $scope.sortType = 'id';
  $scope.sortReverse = false;


  // scope grid options  object

  // can add max and minWidth (s) to each field


  $scope.gridObject = {
    enableSorting: true,
    enableFiltering: true,
    enableColumnResizing: true,
    columnDefs: [
      { field: 'id', width: '10%', minWidth: 20},
      { field: 'email', width: '30%'},
      { field: 'subject_names', width: '30%'},
      { field: 'created_at.substring(0,4)', name: 'Year', width: '15%'},
      { field: 'created_at.substring(5,7)', name: 'Month', width: '15%'},
    ]
  };

  // use a function to return it?

  // data has to be attached to this as data: {data} --- look at docs


  activate();

  function activate () {

    if (vm.subscribers.length === 0) {
      SubscriberService.getAllSubscribers().then( (response)=> {
        // response.data.subscriber.forEach( function (sub) {
        //   // console.log(sub.created_at);
        //   // console.log(moment(sub.created_at, 'YYYY'));
        //   // let newDates = angularMoment(sub.created_at).format('YYYY');
        //   // console.log(newDates);
        // });
        vm.subscribers = response.data.subscriber;
        $scope.gridObject.data = response.data.subscriber;
        console.log('Subscribers', vm.subscribers);
      });
    }
  }

};

ViewSubscribersController.$inject = ['$state', '$scope', 'SubscriberService'];

export default ViewSubscribersController;