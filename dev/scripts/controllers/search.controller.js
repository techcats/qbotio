app.controller('SearchController', ['globals', '$scope', '$http', function (globals, $scope, $http) {
    $scope.getResults = function() {
        $http.get(globals.BASE_URL + 'search/?q=' + ($scope.query ? $scope.query : '')).then(function (response) {
            $scope.results = response.data;
        });
    };
}]);
