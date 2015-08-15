'use strict';

/**
 * @ngdoc function
 * @name minsafeApp.controller:PostsCtrl
 * @description
 * # PostsCtrl
 * Controller of the minsafeApp
 */
angular.module('blogClient')
  .controller('PostsCtrl', ['$scope', 'Post','$location', '$routeParams' , function ($scope, Post, $location, $routeParams) {
    if($location.path() === '/posts'){
      $scope.posts = Post.query();
    }
    if(/\/posts\/\d*/.test($location.path())){ // e.g. /post/1
      $scope.post = Post.get({id: $routeParams.id});
    }

  }]);
  
  
  // app.controller('PhotosCtrl', [
  //   '$scope',
  //   'Photos', // --> Photos $resource with custom '$remove' instance method
  //   '$location',
  //   '$routeParams',
  //   function($scope, Photos, $location, $routeParams){
  //     if($location.path() === '/photos'){
  //       // logic for listing photos
  //       $scope.photos = Photos.query();
  //     }
  // 
  //     if($location.path() === '/photos/new'){
  //       // logic for creating a new photo
  //       $scope.photo = new Photos();
  //     }
  // 
  //     if(/\/photos\/\d*/.test($location.path())){ // e.g. /photos/44
  //       // logic for displaying a specific photo
  //       $scope.photo = Photos.get({id: $routeParams.id});
  //     }
  // 
  //     if(/\/photos\/\d*\/edit/.test($location.path())){ // e.g. /photos/44/edit
  //       // logic for editing a specific photo
  //       $scope.photo = Photos.get({id: $routeParams.id});
  //     }
  // 
  //     // Method shared between 'show' and 'edit' actions
  //     $scope.remove = function(){
  //       $scope.photo.$remove();
  //     }
  // 
  //     // Method shared between 'new' and 'edit' actions
  //     $scope.save = function(){
  //       $scope.photo.$save();
  //     }
  // 
  //   }
  // ]);  
  
  
  // .controller("PostsCtrl", function($scope, Post) {
  //   Post.get({ id: id }, function(data) {
  //     $scope.post = data;
  //   });
  
