'use strict';

/**
 * @ngdoc overview
 * @name minsafeApp
 * @description
 * # minsafeApp
 *
 * Main module of the application.
 */
angular
  .module('blogClient', [
    // 'ngAnimate',
    // 'ngAria',
    // 'ngCookies',
    // 'ngMessages',
    'ngResource',
    'ngRoute',
    // 'ngSanitize',
    // 'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/posts', {
        templateUrl: 'scripts/views/posts/index.html',
        controller: 'PostsCtrl',
        controllerAs: 'posts'
      })
      .when('/posts/:id', {
        templateUrl: 'scripts/views/posts/show.html',
        controller: 'PostsCtrl',
        controllerAs: 'posts'
      })
      .when('/images/', {
        templateUrl: 'scripts/views/images/form.html',
        controller: 'ImagesCtrl',
        controllerAs: 'images'
      })
      .otherwise({
        redirectTo: '/posts'
      });
  });




  // var app = angular.module("MyApp", []).
  //   config(function($routeProvider, $locationProvider) {
  //     $routeProvider.
  //       when("/persons",
  //         { templateUrl: "partials/index.html" }).
  //       when("/login",
  //         { templateUrl: "partials/login.html", controller: "LoginCtrl" }).
  //       // event more routes here ...
  //       otherwise( { redirectTo: "/persons" });
  //   }).
  //   run(function($rootScope, $location) {
  //     $rootScope.$on( "$routeChangeStart", function(event, next, current) {
  //       if ($rootScope.loggedInUser == null) {
  //         // no logged user, redirect to /login
  //         if ( next.templateUrl === "partials/login.html") {
  //         } else {
  //           $location.path("/login");
  //         }
  //       }
  //     });
  //   });

  // var app = angular.module("MyApp", []).
  //   config(function($routeProvider, $locationProvider) {
  //     $locationProvider.hashPrefix('!');
  //     $routeProvider.
  //       when("/persons", { templateUrl: "partials/person_list.html" }).
  //       when("/persons/:id",
  //         { templateUrl: "partials/person_details.html",
  //           controller: "ShowCtrl" }).
  //       otherwise( { redirectTo: "/persons" });
  // });