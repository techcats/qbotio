angular.module('QBotIO', ['ngAnimate','ngCookies','ngResource','ngRoute','ngSanitize','ngTouch', 'ui.bootstrap'])
.controller('QBotIOCtrl', function($scope, $location) {
    $scope.getResults = function() {
        $scope.results = [
            "Result1",
            "Result2",
            "Result3"
        ];
    }
}).
config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/views/main.html',
            controller: 'ResultsController'
        })
        .when('/about', {
            templateUrl: '/views/about.html'
        })
});
