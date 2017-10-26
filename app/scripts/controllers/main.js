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
    $scope.gridOptions = {
      enableColumnMenu: false,
      enableColumnMenus: false,
      enableFiltering: false,
      enableColumnMoving: false,
      paginationPageSizes: [10, 100, 150, 200],
      paginationPageSize: 10,
      enableSorting: false, 
      columnDefs: $scope.columns,
      data: gridFactory.generateDataJsonMock()
    };
  });
