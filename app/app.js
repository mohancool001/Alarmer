'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ngStorage',
    'myApp.view1',
    'myApp.view2',
    'myApp.view3'
]).
config(['$routeProvider', function($routeProvider) {
    //$locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/view1'});
}]).
controller('MainCtrl',function($scope,$timeout,dateFilter){
    $scope.theclock = "Loading clock...";
    $scope.thedate = "Loading Date...";
    $scope.updateTime = function(){
        $timeout(function(){
            $scope.theclock = (dateFilter(new Date(), 'hh:mm:ss'));
            $scope.thedate = (dateFilter(new Date(), 'MMMM d, y'));
            $scope.updateTime();
        },1000);
    };
    $scope.updateTime();
});
