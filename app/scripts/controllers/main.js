'use strict';

/**
 * @ngdoc function
 * @name pocSector3FrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pocSector3FrontApp
 */
angular.module('pocSector3FrontApp')
  .controller('MainCtrl', function ($scope, gridFactory) {
    $scope.columns = gridFactory.generateColumnsMock();
    $scope.selectCellData = [];
    $scope.gridOptions = {
      enableColumnMenus: true,
      enableFiltering: true,
      enableSelectAll: false,
      enableColumnMoving: false,
      multiSelect: false,
      
      paginationPageSizes: [10, 100, 150, 200],
      paginationPageSize: 10,
      enableSorting: true, 
      columnDefs: $scope.columns,
      data: gridFactory.generateDataJsonMock(),
      onRegisterApi: function(gridApi){
        $scope.gridApi = gridApi;

        gridApi.selection.on.rowSelectionChanged($scope,function(row){
          $scope.selectCellData = row.entity;
        });
      }
    };
  });
