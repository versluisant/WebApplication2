var app = angular.module('webStoreApp', []);

app.controller('categoriesCtrl', function ($scope) {
    $scope.categories = [
      { 'name': 'books' },
      { 'name': 'phones' },
      { 'name': 'hardware' }
    ];
});

app.controller('inventoryCtrl', ['$scope', '$http', function ($scope, $http) {
    var result = $http.get('/Json/inventory.json').success(function (data) {
        $scope.phones = data;
    })
}]);