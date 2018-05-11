// Code goes here
(function() {

  var app = angular.module("colorApp");


  app.controller("MainController", 
                ["$scope", 
                 "$interval",
                 "$location",
                 function($scope, 
                          $interval, 
                          $location) {

    $scope.rgb = "";
    $scope.countdown = 15;
    var promise;

    var decrementCountdown = function() {
      $scope.countdown -= 1;
      if ($scope.countdown < 1) {
        $scope.search($scope.rgb);
      }
    };

    var startCountdown = function() {
      promise = $interval(decrementCountdown, 1000, $scope.countdown);
    };
    startCountdown();

    var stopCountdown = function() {
      if (promise) {
        $interval.cancel(promise);
        stop = undefined;
      }
    }
    
   $scope.search = function(rgb) {
     if (promise) {
       $interval.cancel(promise);
     }
     $location.path("/color/" + rgb);
   }

  }]);

}());