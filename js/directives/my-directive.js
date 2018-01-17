app.directive("randomUser", function () {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    scope: {
      people: '=',
      title: '='
    },
    templateUrl: 'views/random-user.html',
    controller: function ($scope) {
      $scope.randomNum = Math.round(Math.random() * 5);
    }
  };
});
