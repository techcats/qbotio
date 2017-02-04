app.controller('SearchController', ['globals', '$scope', '$http', function (globals, $scope, $http) {
    $scope.getResults = function() {
        $http({
            method: 'GET',
            url: globals.BASE_URL + 'search'
        }).then(function (response) {
            $scope.results = response.data;
        });
    };
}]);
