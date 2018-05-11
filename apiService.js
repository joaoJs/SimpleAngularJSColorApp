(function() {
  
  
  
  var colorServiceApi = function($http) {
    
    var getColorInfo = function(rgb) {
      return $http.get("https://www.thecolorapi.com/id?rgb=" + rgb)
                  .then(function(response) {
                    console.log(response);
                    return response.data;
                  });
    };
    
    return {
      getColorInfo: getColorInfo
    };
    
  };
  
  var module = angular.module("colorApp");
  module.factory("colorService", colorServiceApi);
  
}());