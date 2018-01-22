// navigation
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider.when('/home', {
    templateUrl: 'views/homepage.html',
    controller: 'userDirectory'
  }).when('/dirlist', {
    templateUrl: 'views/users-details.html',
    controller: 'userDirectory'
  }).when('/contact', {
    templateUrl: 'views/contact.html',
    controller: 'contactController'
  }).when('/contact-success', {
    templateUrl: 'views/contact-success.html',
    controller: 'contactController'
  }).otherwise({
    redirectTo: '/home'
  });
}]);

// Defining main Controller
app.controller('userDirectory', ['$scope', '$log', '$http', function ($scope, $log, $http) {

  // getting json values
  $http.get('json/users-details.json').then(function (response) {
    $scope.cityName = response.data.city_name;
    $scope.country = response.data.country;
    $scope.people = response.data.people;
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

  // delete User from table
  $scope.deleteFunc = function (x) {
    let confirmation = confirm("Are you sure you wana delete this?");
    if (confirmation) {
      $scope.people.splice(x, 1);
    }
  };
  // delete alal users at once
  $scope.deleteAllIsers = function () {
    if ($scope.people.length >= 1) {
      let confirmation = confirm("Are you sure you wana delete all users?");
      if (confirmation) {
        $scope.people = [];
      }
    }
  };
}]);

// Defining main Controller
app.controller('contactController', ['$scope', '$location', function ($scope, $location) {
  $scope.sendMessage = function () {
    $location.path('/contact-success');
  }
}])
