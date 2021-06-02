angular.
  module('ngCalendar').
  config(
    ['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/Home', {
          template: '<home-page></home-page>'
        }).
        when('/AddEditSchedule', {
          template: '<add-schedule></add-schedule>'
        }).
        when('/ViewSchedule', {
            template: '<view-schedule></view-schedule>'
        }).
        otherwise('/Home');
    }
  ]);
