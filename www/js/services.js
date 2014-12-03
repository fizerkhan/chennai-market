angular.module('chennaiMarket.services', [])
.factory('KimonoService', function($http) {
  return {
    getVegetables: function() {
      return $http.jsonp('https://www.kimonolabs.com/api/6jfd7ua0?apikey=5608c5fa9f5c237d8ffc08188fc716e0&callback=JSON_CALLBACK');
    },
    getFruits: function() {
      return $http.jsonp('https://www.kimonolabs.com/api/eet4vfik?apikey=5608c5fa9f5c237d8ffc08188fc716e0&callback=JSON_CALLBACK');
    },
    getGoldSilver: function() {
      return $http.jsonp('https://www.kimonolabs.com/api/ds5knnw6?apikey=5608c5fa9f5c237d8ffc08188fc716e0&callback=JSON_CALLBACK');
    }
  }
});
