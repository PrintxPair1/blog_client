'use strict';

/**
 * @ngdoc function
 * @name minsafeApp.controller:PostsCtrl
 * @description
 * # PostsCtrl
 * Controller of the minsafeApp
 */
angular.module('blogClient')
  .controller('PostsCtrl', ['$scope', 'Post', function ($scope, Post) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.heading = 'Posts';
    $scope.posts = Post.query();
  }]);
