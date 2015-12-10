import moment from 'moment';

let ViewSubscribersController = function($state, $scope, SubscriberService) {
  
  // set view model to this object
  let vm = this;

  // connect data to scope of the controller through view model
  vm.subscribers = [];
  vm.submitedits = submit;

  $scope.sortType = 'id';
  $scope.sortReverse = false;


  function submit (currentData) {
    // console.log($scope.gridObject.data);
    let currentData = $scope.gridObject.data;
    console.log(currentData);
    // SubscriberService.updateSubscribers(currentData).then( (response) => {
    //   console.log(response);
    // });
  }



  $scope.msg = {};

 
  $scope.gridObject = {
    enableSorting: true,
    enableFiltering: true,
    enableColumnResizing: true,
    columnDefs: [
      { field: 'id', width: '10%', minWidth: 20},
      { field: 'email', width: '10%'},
      { field: 'subject_names', width: '10%'},
      // { field: 'subject_names.includes(`${'baseball'}`)', width: '10%'},
      { field: 'created_at.substring(0,4)', name: 'Year', width: '10%'},
      { field: 'created_at.substring(5,7)', name: 'Month', width: '10%'},
      { field: 'created_at.substring(8,10)', name: 'Day', width: '10%'},
    ],
  };

  $scope.gridObject.onRegisterApi = function(gridApi){
    //set gridApi on scope
    $scope.gridApi = gridApi;
    gridApi.edit.on.afterCellEdit($scope,function(rowEntity, colDef, newValue, oldValue){
      console.clear();
      console.log(newValue);
    });
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