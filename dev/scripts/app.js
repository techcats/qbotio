var app = angular.module('QBotIO', ['ngAnimate','ngCookies','ngResource','ngRoute','ngSanitize','ngTouch', 'ui.bootstrap'])
.constant('globals', {
    /* @if NODE_ENV='production' ** BASE_URL : 'http://api.qbotio.com/', /* @endif */ //@exclude
    BASE_URL : 'http://localhost:8000/'
    //@endexclude
})
.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/views/main.html',
            controller: 'SearchController'
        })
        .when('/set', {
            templateUrl: '/views/results.html',
            controller: 'SearchController'
        });
    $locationProvider.html5Mode(true);
});
