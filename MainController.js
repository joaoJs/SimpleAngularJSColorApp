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

   $scope.search = function(rgb) {
     $location.path("/color/" + rgb);
   }

  }]);

}());
