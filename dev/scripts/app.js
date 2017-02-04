angular.module('QBotIO', ['ngAnimate','ngCookies','ngResource','ngRoute','ngSanitize','ngTouch', 'ui.bootstrap'])
.const({
    /* @if NODE_ENV='production' **
    BASE_URL : 'http://www.qbotio.com:8080/'
    /* @endif */
    //@exclude
    BASE_URL : 'http://localhost:8080/'
    //@endexclude
})
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
