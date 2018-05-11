(function(){
  
  var app = angular.module("colorApp", ["ngRoute"]);
  
  app.config(function($routeProvider) {
    $routeProvider
      .when("/main", {
        templateUrl: "main.html",
        controller: "MainController"
    })
      .when("/color/:rgb", {
          templateUrl: "tableOfColors.html",
          controller: "ColorTableController"
      })
      .otherwise({redirectTo:"/main"});
  });
  
}());