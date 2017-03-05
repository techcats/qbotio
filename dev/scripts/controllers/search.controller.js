app.controller('SearchController', ['globals', '$scope', '$http', function (globals, $scope, $http) {
    $scope.getResults = function() {
        $http.get(globals.BASE_URL + 'search/?q=' + ($scope.query ? $scope.query : '')).then(function (response) {
            $scope.results = response.data;
        });
    };

    $scope.getQuestions = function(query) {
        return $http.get(globals.BASE_URL + 'suggest/?q=' + query).then(function (response) {
            return response.data.map(function(item) {
                return item.value
            });
        });
    }
}]);
