angular.module('QBotIO', ['ngAnimate','ngCookies','ngResource','ngRoute','ngSanitize','ngTouch', 'ui.bootstrap'])
.controller('QBotIOCtrl', function($scope, $location) {
    $scope.getResults = function() {
        $location.path('results');
    }
}).
config(function($routeProvider) {
    $routeProvider.when('/results', {
        templateUrl: '/views/results.html'
    })
});
