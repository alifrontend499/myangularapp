app.controller('userDirectory', ['$scope', '$log', '$http', function ($scope, $log, $http) {
  // getting ajax values
  $http.get('http://localhost/myangularapp/json/users-details.json').then(function (response) {
    $scope.people = response.data.people;
    console.log($scope.people);
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
    console.log(x);
    if (confirmation) {
      // var remove = $scope.data.indexOf(x);
      $scope.people.splice(x, 1);
    }
  }

}]);
