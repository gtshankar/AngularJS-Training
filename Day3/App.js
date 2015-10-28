var myroutingModule = angular.module('myroutingModule', ['ngRoute']);
myroutingModule.config(function ($routeProvider) {
    $routeProvider.when('/create_event/:param', {
        templateUrl: 'CreateEvent.html',
        controller: 'routingController'
    }).when('/event_details/:param', {
        templateUrl: 'EventDetails.html',
        controller: 'eventController'
    })
});