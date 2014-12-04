// Chennai Market app
angular.module('chennaiMarket', ['ionic', 'chennaiMarket.controllers', 'chennaiMarket.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.vegetables', {
      url: '/vegetables',
      views: {
        'tab-vegetables': {
          templateUrl: 'templates/tab-vegetables.html',
          controller: 'VegetablesCtrl'
        }
      }
    })

    .state('tab.fruits', {
      url: '/fruits',
      views: {
        'tab-fruits': {
          templateUrl: 'templates/tab-fruits.html',
          controller: 'FruitsCtrl'
        }
      }
    })

    .state('tab.goldsilver', {
      url: '/goldsilver',
      views: {
        'tab-goldsilver': {
          templateUrl: 'templates/tab-goldsilver.html',
          controller: 'GoldSilverCtrl'
        }
      }
    })

    .state('tab.fuel', {
      url: '/fuel',
      views: {
        'tab-fuel': {
          templateUrl: 'templates/tab-fuel.html',
          controller: 'FuelCtrl'
        }
      }
    })

    .state('about', {
      url: '/about',
      templateUrl: 'templates/about.html',
      controller: 'AboutCtrl'
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/vegetables');

});

