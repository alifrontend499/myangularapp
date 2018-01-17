app.directive('randUser', [function() {
  return {
    restrict: 'E',
    scope: {
      title: '='
    },
    template: '{{title}}',
    controller: function($scope){}
  }
}]);
