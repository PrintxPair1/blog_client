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
    return $resource('http://localhost:3000/posts/');
  }]);
