// navigation
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'views/homepage.html',
    controller: 'userDirectory'
  }).when('/dirlist', {
    templateUrl: 'views/users-details.html',
    controller: 'userDirectory'
  }).otherwise({
    redirectTo: '/home'
  })
}]);

// Defining Controller
app.controller('userDirectory', ['$scope', '$log', '$http', function ($scope, $log, $http) {

  // getting json values
  $http.get('http://localhost/myangularapp/json/users-details.json').then(function (response) {
    $scope.cityName = response.data.city_name;
    $scope.country = response.data.country;
    $scope.people = response.data.people;
    // console.log($scope.country);
  });

  // insert more people in list
  $scope.submitValue = function () {
    if ($scope.myname !== '' && $scope.profession !== '') {
      $scope.people.push({
        name: $scope.myname,
        age: $scope.myage,
        profession: $scope.profession
      });
      $scope.myname = '';
      $scope.myage = '';
      $scope.profession = '';
    }
  };

  // delete Users from table
  $scope.deleteFunc = function (x) {
    var confirmation = confirm("Are you sure you wana delete this?");
    if (confirmation) {
      $scope.people.splice(x, 1);
    }
  }
}]);
