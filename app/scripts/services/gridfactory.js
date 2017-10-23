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
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
