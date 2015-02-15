var app = angular.module('miniRouting', ['ngRoute'])



app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'home/homeTmpl.html',
      controller: 'homeCtrl'

       })	
    .when('/products/:id', { // this :id is a placeholder for your path. if it said /products/home home would go were id went.
    	templateUrl: 'Products/ProductsTmpl.html',
    	controller: 'productCtrl'

    })
    .when('/settings',{
    	templateUrl: 'Settings/SettingsTmpl.html',
    	controller: 'settingCtrl'

    })
     .otherwise({
      redirectTo: '/'
    })
  





})