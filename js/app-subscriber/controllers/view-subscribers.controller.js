import moment from 'moment';

let ViewSubscribersController = function($state, $scope, SubscriberService, UserService) {
  
  // set view model to this object
  let vm = this;

  // connect data to scope of the controller through view model
  vm.subscribers = [];
  vm.submitedits = submit;
  vm.importSubscribers = importSubscribers;

  $scope.sortType = 'id';
  $scope.sortReverse = false;

  $scope.logOut = logout;

  function logout () {
    console.log('LOGOUT CALLED');
    UserService.logout();
  }


  function importSubscribers () {
    console.log('File import click');
    let fileField = document.getElementById('subscriberImport');
    let fileObj = fileField.files[0];
    console.log(fileObj);

    SubscriberService.importSubscribers(fileObj).then( (response) => {
      console.log(response);
    });
  }


  function submit () {
    // console.log($scope.gridObject.data);
    let currentData = $scope.gridOptions.data;
    console.log(currentData);
    // SubscriberService.updateSubscribers(currentData).then( (response) => {
    //   console.log(response);
    // });
  }

  $scope.gridOptions = {
    enableSorting: true,
    enableFiltering: true,
    enableColumnResizing: true,
    paginationPageSize: 50,
    columnDefs: [
      // { field: 'id', width: '5%'},
      { field: 'email', width: '30%'},
      { field: 'subject_names', width: '35%'},
      // { field: 'subject_names.includes("Baseball")', name: 'Baseball', width: '*'},
      // { field: 'subject_names.includes("Basketball")', name: 'Basketball', width: '*'},
      // { field: 'subject_names.includes("Football")', name: 'Football', width: '*'},
      // { field: 'subject_names.includes("Hockey")', name: 'Hockey', width: '*'},
      // { field: 'subject_names.includes("Soccer")', name: 'Soccer', width: '*'},
      { field: 'created_at.substring(0,4)', name: 'Yr', width: '10%', enableCellEdit: false},
      { field: 'created_at.substring(5,7)', name: 'Mo', width: '10%', enableCellEdit: false},
      { field: 'created_at.substring(8,10)', name: 'Day', width: '*', enableCellEdit: false},
    ],
  };

  $scope.gridOptions.onRegisterApi = function (gridApi) {
    //set gridApi on scope
    console.log(gridApi);
    $scope.gridApi = gridApi;
    // gridApi.selection.getSelectedRows($scope, function(rowEntity){
    //   console.log(rowEntity);
    // });
    $scope.deleteMe = function () {
      let rowToDelete = gridApi.grid.selection.lastSelectedRow.entity;
      console.log(rowToDelete); 
      SubscriberService.deleteSubscriber(rowToDelete).then( (response) => {
        console.log(response);
        $state.reload();
      });
    };
    $scope.viewMe = function () {
      let rowToView = gridApi.grid.selection.lastSelectedRow.entity;
      console.log(rowToView); 
      $state.go('root.edit-subscriber', {id: rowToView.id});
    };
    gridApi.edit.on.afterCellEdit($scope,function(rowEntity, colDef, newValue, oldValue){
      console.clear();
      console.log(rowEntity);
      SubscriberService.updateSubscribers(rowEntity).then( (response) => {
        console.log(response);
      });
    });
  };





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
        $scope.gridOptions.data = response.data.subscriber;
        console.log('Subscribers', vm.subscribers);
      });
    }

  }

};

ViewSubscribersController.$inject = ['$state', '$scope', 'SubscriberService', 'UserService'];

export default ViewSubscribersController;