'use strict';

/**
 * @ngdoc service
 * @name minsafeApp.Post
 * @description
 * # Post
 * Service in the minsafeApp.
 */

angular.module('blogClient')
  .factory('Post', ['$resource', function ($resource) {
    // return $resource('http://localhost:3000/posts/');
    return $resource("http://localhost:3000/posts/:id", { id: "@id" },
      {
        'create':  { method: 'POST' },
        'index':   { method: 'GET', isArray: true },
        'show':    { method: 'GET', isArray: false },
        'update':  { method: 'PUT' },
        'destroy': { method: 'DELETE' }
      }
    );    
  }]);