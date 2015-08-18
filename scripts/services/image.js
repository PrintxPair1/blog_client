'use strict';

/**
 * @ngdoc service
 * @name minsafeApp.Post
 * @description
 * # Post
 * Service in the minsafeApp.
 */

angular.module('blogClient')
  .factory('Image', ['$resource', function ($resource) {
    return $resource("http://localhost:3000/images/:id", { id: "@id" },
      {
        'create':  { method: 'POST' },
        'index':   { method: 'GET', isArray: true },
        'show':    { method: 'GET', isArray: false },
        'update':  { method: 'PUT' },
        'destroy': { method: 'DELETE' }
      }
    );
  }]);