let ViewSubscribersController = function($state, $scope, SubscriberService, moment) {
  
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
      { field: 'subject_names', width: '40%'},
      { field: 'created_at', width: '20%', type: 'date'}
    ]
  };

  // use a function to return it?

  // data has to be attached to this as data: {data} --- look at docs


  activate();

  function activate () {

    if (vm.subscribers.length === 0) {
      SubscriberService.getAllSubscribers().then( (response)=> {
        response.data.subscriber.forEach( function (sub) {
          console.log(sub.created_at);
          // let newDates = moment(sub.created_at).format('YYYY');
          // console.log(newDates);
        });
        

        // forEach(funct)

        vm.subscribers = response.data.subscriber;
        $scope.gridObject.data = response.data.subscriber;
        console.log('Subscribers', vm.subscribers);
      });
    }
  }

};

ViewSubscribersController.$inject = ['$state', '$scope', 'SubscriberService', 'moment'];

export default ViewSubscribersController;