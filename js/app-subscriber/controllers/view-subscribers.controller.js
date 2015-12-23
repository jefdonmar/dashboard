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

    setTimeout( function() {
      location.reload();
    }, 1500);
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
    enableRowSelection: true,
    multiSelect: true,
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

  // ARRAYS OF SELECTED USER IDs
  let selectAllRows = [];
  let selectedRows = [];

  $scope.gridOptions.onRegisterApi = function (gridApi) {
    //set gridApi on scope
    console.log(gridApi);
    $scope.gridApi = gridApi;
    // gridApi.selection.getSelectedRows($scope, function(rowEntity){
    //   console.log(rowEntity);
    // });
    $scope.deleteMe = function () {
      // let rowToDelete = gridApi.grid.selection.lastSelectedRow.entity;
      console.log('DELETE THESE ROWS', selectedRows); 
      selectedRows.forEach( function (subscriberId) {
        console.log(subscriberId);
        SubscriberService.deleteSubscriber(subscriberId).then( (response) => {
          console.log('DELETE RESPONSE',response);
        });
        setTimeout( function() {
          $state.reload();
        }, 1500);
      });
    };
    $scope.lastSelect = false;
    $scope.viewMe = function () {
      let rowToView = gridApi.grid.selection.lastSelectedRow.entity;
      console.log(rowToView); 
      // $scope.lastSelect = rowToView;
      $state.go('root.edit-subscriber', {id: rowToView.id});
    };
    gridApi.edit.on.afterCellEdit($scope,function(rowEntity, colDef, newValue, oldValue){
      console.clear();
      console.log(rowEntity);
      SubscriberService.updateSubscribers(rowEntity).then( (response) => {
        console.log(response);
      });
    });

    // Multi-selection playground

    gridApi.selection.on.rowSelectionChanged($scope,function(row, rowSelectionChanged, rowEntity){
      console.log(row.isSelected);
      // console.log(row.entity.id);
      // console.log('INDEX OF', selectedRows.indexOf(row.entity.id));
      
      if (row.isSelected) {
        $scope.lastSelect = row.entity;
      }


      // Only add the id if it is not already included? 
      if (row.isSelected && selectedRows.indexOf(row.entity.id) === -1) {
        console.log('SHOULD ADD');
        selectedRows.push(row.entity.id);
      } 

      if (row.isSelected && selectAllRows.indexOf(row.entity.id) === -1) {
        console.log('SHOULD ADD TO SELECT ALL');
        selectAllRows.push(row.entity.id);
      } 

      // Show the resulting selection
      // console.log('SELECTED ROWS', selectedRows);

      // Remove the id if it becomes 'unselected'
      if (!row.isSelected && selectedRows.indexOf(row.entity.id) !== -1 ) {
        console.log('SHOULD REMOVE');
        let index = selectedRows.indexOf(row.entity.id);
        selectedRows.splice(index, 1);
      }

      if (!row.isSelected && selectAllRows.indexOf(row.entity.id) !== -1 ) {
        console.log('SHOULD REMOVE FROM SELECT ALL');
        let indexA = selectAllRows.indexOf(row.entity.id);
        selectAllRows.splice(indexA, 1);
      }

      // Show the resulting selection
      console.log('SELECTED ROWS', selectedRows);
      console.log('SELECT ALL ROWS', selectAllRows);

    });

    gridApi.selection.on.rowSelectionChangedBatch($scope,function(rows){
      console.log(rows);
      rows.forEach( function (row) {
        console.log(row.isSelected);
        if (row.isSelected && selectAllRows.indexOf(row.entity.id) === -1) {
          selectAllRows.push(row.entity.id);
        }
        if (row.isSelected && selectedRows.indexOf(row.entity.id) === -1) {
          selectedRows.push(row.entity.id);
        }
      });
      rows.forEach( function (row) {
        console.log(row.isSelected);
        if (!row.isSelected && selectedRows.indexOf(row.entity.id) !== -1) {
          let indexY = selectedRows.indexOf(row.entity.id);
          selectedRows.splice(indexY, 1);
        }

        if (!row.isSelected && selectAllRows.indexOf(row.entity.id) !== -1) {
          let indexZ = selectAllRows.indexOf(row.entity.id);
          selectAllRows.splice(indexZ, 1);
        }
      });
      console.log('SELECT ALL ROWS', selectAllRows);
      console.log('SELECTED ROWS', selectedRows);
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