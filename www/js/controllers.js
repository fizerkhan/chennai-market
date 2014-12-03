angular.module('chennaiMarket.controllers', [])

.controller('VegetablesCtrl', function($scope, $ionicLoading, $ionicPopup, KimonoService) {
    $ionicLoading.show({ template: 'Loading...'  });
    KimonoService.getVegetables().then(function(response) {
            $scope.vegetables = response.data.results.vegetables;
        }, function(error) {
            $ionicPopup.alert({ title: 'Error!', template: error && error.data });
        }).finally(function () {
            $ionicLoading.hide();
        });

})

.controller('FruitsCtrl', function($scope, $ionicLoading, $ionicPopup, KimonoService) {
    $ionicLoading.show({ template: 'Loading...'  });
    KimonoService.getFruits().then(function(response) {
            $scope.fruits = response.data.results.fruits;
        }, function(error) {
            $ionicPopup.alert({ title: 'Error!', template: error && error.data });
        }).finally(function () {
            $ionicLoading.hide();
        });

})

.controller('GoldSilverCtrl', function($scope, $ionicLoading, $ionicPopup, KimonoService) {
    $ionicLoading.show({ template: 'Loading...'  });
    KimonoService.getGoldSilver().then(function(response) {
            $scope.gold = response.data.results.gold;
            $scope.silver = response.data.results.silver;
        }, function(error) {
            $ionicPopup.alert({ title: 'Error!', template: error && error.data });
        }).finally(function () {
            $ionicLoading.hide();
        });
});

