app.controller("projectsCtrl", function($scope, $http){
    $scope.title = "Article Title";
    $http.get("/view/projects/test.src").then(function(response){
        $scope.text = response.data;
    });
});