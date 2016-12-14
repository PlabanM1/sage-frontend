var studentApp = angular.module('studentApp', [
    'ngRoute',
    'vjs.video',
    'ngFileUpload',
    //'controllers'
    //'serviceFactory',
    //'ui.bootstrap'
]);


studentApp
    .config(function($routeProvider) {
    $routeProvider
        .when('/account/:sid', {
            templateUrl: '/public/views/student_account.html',
            controller: 'StudentAccountController'
        })
        .when('/tasks/:sid', {
            templateUrl: '/public/views/student_tasks.html',
            controller: 'StudentTasksController'
        })
        .when('/overview/:sid', {
            templateUrl: '/public/views/student_overview.html',
            controller: 'StudentOverviewController'
        })
        .when('/', {
            templateUrl: "/public/views/error.html"
        });
    })
    .run(function($rootScope) {
        $rootScope.isHidden = false;

        $rootScope.showHide = function () {
            //If DIV is hidden it will be visible and vice versa.
            $rootScope.isHidden = $rootScope.isHidden ? false : true;
            console.log($rootScope.isHidden);
        };
    });