var app = angular.module('BlogApp', []);

app.controller('MainController', ['$scope', function ($scope) {
  $scope.posts = posts;
}]);