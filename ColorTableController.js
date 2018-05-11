(function() {

  var app = angular.module("colorApp");


  app.controller("ColorTableController", 
                ["$scope", 
                 "colorService",
                 "$routeParams",
                 function($scope, 
                          colorService,
                          $routeParams) {

    $scope.rgb = $routeParams.rgb;
    console.log($scope.rgb);
  
    var colors = [];
    
    var addColor = function(data) {
        console.log(data);
      
        var newColorObj = {
            name: data.name.value,
            image: data.image.bare,
            hex: data.hex.value
          }

        colors.push(newColorObj);
        
  
        $scope.colors = colors;
        
    }

    function onError(error) {
      console.log("no data retrieved");
      // $scope.errorMessage = "Could not retrieve data";
    }
    
    colorService.getColorInfo($scope.rgb).then(addColor, onError);

  }]);

}());