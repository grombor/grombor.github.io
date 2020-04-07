var app = angular.module("myapp",["ngRoute"]);

app.controller("myCtrl",function ($scope){
  $scope.link_km = "http://kmarchel.pl";
  $scope.link_gh = "https://github.com/grombor";
  $scope.link_fb = "https://www.facebook.com/esmeregilda.kaczmarska";
  $scope.link_li = "https://www.linkedin.com/in/kamil-marchel-82926313b";
  $scope.link_tw = "https://twitter.com/jangrombor";
  $scope.title = "Don't be afraid to give up the good to go for the great.";
  $scope.subtitle = "-John D. Rockefeller";
});

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "./view/main.php",
      controller : "mainCtrl"
    })
    .when("/download", {
      templateUrl : "./view/download.php",
      controller : "downloadCtrl"
    })
    .when("/projects", {
      templateUrl : "./view/projects.php",
      controller : "projectsCtrl"
    })
    .otherwise({
      templateUrl : "./view/main.php",
      controller : "mainCtrl"
  });
  });