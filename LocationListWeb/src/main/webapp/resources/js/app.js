locationListApp = angular.module('locationListApp', ['ngRoute', 'mapModule', 'summaryModule', 'ngGrid']);

locationListApp.config(function ($routeProvider) {

    $routeProvider
        .when('/summary', {
            templateUrl: 'resources/html/summary.html',
            controller: 'summaryCtrl',
            activeTab: 'summaryTab'
        })
        .when('/map', {
            templateUrl: 'resources/html/location.html',
            controller: 'locationCtrl',
            activeTab: 'mapTab'
        })
        .otherwise({
            redirectTo: '/summary'
        });
});

mapModule = angular.module('mapModule', []);

summaryModule = angular.module('summaryModule', ['ngGrid']);
