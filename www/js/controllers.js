angular.module('chennaiMarket.controllers', ['ngCordova', 'chennaiMarket.services'])

.controller('VegetablesCtrl', function($scope, $ionicLoading, $ionicPopup, KimonoService) {
    $ionicLoading.show({ template: 'Loading...'  });
    KimonoService.getVegetables().then(function(response) {
            $scope.vegetables = response.data.results.vegetables;
        }, function(error) {
            if (error && error.data) {
                $ionicPopup.alert({ title: 'Error!', template: error && error.data });
            } else {
                $ionicPopup.alert({
                  title: 'Internet Disconnected',
                  content: 'The internet is disconnected on your device.'
                });
            }
        }).finally(function () {
            $ionicLoading.hide();
        });
})

.controller('FruitsCtrl', function($scope, $ionicLoading, $ionicPopup, KimonoService) {
    $ionicLoading.show({ template: 'Loading...'  });
    KimonoService.getFruits().then(function(response) {
            $scope.fruits = response.data.results.fruits;
        }, function(error) {
            if (error && error.data) {
                $ionicPopup.alert({ title: 'Error!', template: error && error.data });
            } else {
                $ionicPopup.alert({
                  title: 'Internet Disconnected',
                  content: 'The internet is disconnected on your device.'
                });
            }
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
            if (error && error.data) {
                $ionicPopup.alert({ title: 'Error!', template: error && error.data });
            } else {
                $ionicPopup.alert({
                  title: 'Internet Disconnected',
                  content: 'The internet is disconnected on your device.'
                });
            }
        }).finally(function () {
            $ionicLoading.hide();
        });
})

.controller('FuelCtrl', function($scope, $ionicLoading, $ionicPopup, KimonoService) {
    $ionicLoading.show({ template: 'Loading...'  });
    KimonoService.getFuel().then(function(response) {
            var fuel = response.data.results.fuel;
            if (fuel && fuel.length) {
                $scope.petrol = fuel[0].petrol.match(/\d+\.\d+/, '')[0];
                $scope.diesel = fuel[0].diesel.match(/\d+\.\d+/, '')[0];
            }
        }, function(error) {
            if (error && error.data) {
                $ionicPopup.alert({ title: 'Error!', template: error && error.data });
            } else {
                $ionicPopup.alert({
                  title: 'Internet Disconnected',
                  content: 'The internet is disconnected on your device.'
                });
            }
        }).finally(function () {
            $ionicLoading.hide();
        });
})

.controller('AboutCtrl', function($scope, $cordovaSocialSharing, $location) {
    $scope.share = function () {
        var message = "Chennai Market is an awesome free app that provides "+
            "live market price for vegetables, fruits, gold, silver, petrol and "+
            "diesel in Chennai city.\n\nDownload it from here "+
            "https://play.google.com/store/apps/details?id=com.fizerkhan.chennaimarket";
        $cordovaSocialSharing.share(message, 'Share Chennai Market with you', null, null);
    }
    $scope.feedback = function () {
        $cordovaSocialSharing
            .shareViaEmail('', 'Chennai Market Feedback', 'fizerkhan@gmail.com');
    }
    $scope.rateUs = function () {
        window.open('market://details?id=com.fizerkhan.chennaimarket');
    }
    $scope.goBack = function() {
        $location.path('/tab/vegetables');
    }
});




