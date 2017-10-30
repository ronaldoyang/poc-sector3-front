'use strict';

/**
 * @ngdoc service
 * @name pocSector3FrontApp.gridFactory
 * @description
 * # gridFactory
 * Factory in the pocSector3FrontApp.
 */
angular.module('pocSector3FrontApp')
  .factory('gridFactory', function () {
    var factory = {}; 

    factory.generateColumnsMock = function () {
      var columns = [
        {"name": "coluna1", "displayName": "Coluna 1", "size": 5, "type": "number", "class": ""}, 
        {"name": "coluna2", "displayName": "Coluna 2", "size": 10, "type": "string", "class": ""},
        {"name": "coluna3", "displayName": "Coluna 3", "size": 15, "type": "string", "class": ""},
        {"name": "coluna4", "displayName": "Coluna 4", "size": 1, "type": "string", "class": ""}
      ];
      return columns;
    };

    factory.generateDataJsonMock = function () {
      var data = [
        {"coluna1": 1, "coluna2": "12", "coluna3": "13", "coluna4": "14"},
        {"coluna1": 2, "coluna2": "22", "coluna3": "23", "coluna4": "24"},
        {"coluna1": 3, "coluna2": "32", "coluna3": "33", "coluna4": "34"},
        {"coluna1": 4, "coluna2": "42", "coluna3": "43", "coluna4": "44"},
        {"coluna1": 5, "coluna2": "52", "coluna3": "53", "coluna4": "54"}
      ];
      return data; 
    };

    return factory;
  });
