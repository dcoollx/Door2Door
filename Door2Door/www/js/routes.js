angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.timer', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/timer.html',
        controller: 'timerCtrl'
      }
    }
  })

  .state('tabsController.house2House', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/house2House.html',
        controller: 'house2HouseCtrl'
      }
    }
  })

  .state('tabsController.report', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/report.html',
        controller: 'reportCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('about', {
    url: '/page5',
    templateUrl: 'templates/about.html',
    controller: 'aboutCtrl'
  })

  .state('myGoals', {
    url: '/page6',
    templateUrl: 'templates/myGoals.html',
    controller: 'myGoalsCtrl'
  })

  .state('tabsController.returnVisits', {
    url: '/page7',
    views: {
      'tab4': {
        templateUrl: 'templates/returnVisits.html',
        controller: 'returnVisitsCtrl'
      }
    }
  })

  .state('settings', {
    url: '/page8',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

$urlRouterProvider.otherwise('/page1/page2')


});