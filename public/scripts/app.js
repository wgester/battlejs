angular.module('app', ['ngRoute'])

  .config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider

      .when('/', {
        templateUrl: '/views/main.html',
        controller: 'MainController'
      })
      .when('/newGame', {
        templateUrl: '/views/game.html',
        controller: 'GameController'
      });
  });