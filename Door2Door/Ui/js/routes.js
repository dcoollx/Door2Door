angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.timer', {
    url: '/page1',
    views: {
      'tab1': {
        templateUrl: 'templates/timer.html',
        controller: 'timerCtrl'
      }
    }
  })

  .state('tabsController.contacts', {
    url: '/page3',
    views: {
      'tab4': {
        templateUrl: 'templates/contacts.html',
        controller: 'contactsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('signup', {
    url: '/page0',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('tabsController.house2House', {
    url: '/page2',
    views: {
      'tab5': {
        templateUrl: 'templates/house2House.html',
        controller: 'house2HouseCtrl'
      }
    }
  })

  .state('atHome', {
    url: '/page6',
    templateUrl: 'templates/atHome.html',
    controller: 'atHomeCtrl'
  })

  .state('settings', {
    url: '/page8',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

  .state('about', {
    url: '/page9',
    templateUrl: 'templates/about.html',
    controller: 'aboutCtrl'
  })

$urlRouterProvider.otherwise('')


});