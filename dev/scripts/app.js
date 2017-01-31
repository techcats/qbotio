angular.module('QBotIO', ['ngAnimate','ngCookies','ngResource','ngRoute','ngSanitize','ngTouch', 'ui.bootstrap'])
.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/views/main.html',
            controller: 'SearchController'
        })
        .when('/about', {
            templateUrl: '/views/about.html'
        });
    $locationProvider.html5Mode(true);
});
