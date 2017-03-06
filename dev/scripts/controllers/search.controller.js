app.controller('SearchController', function (globals, $scope, $http, $location) {
    
    var parameters = $location.search()
    if (parameters.q) {
        $scope.query = parameters.q
        $http.get(globals.BASE_URL + 'search/?q=' + $scope.query).then(function (response) {
            $scope.results = response.data;
        });
    }

    $scope.getResults = function() {
        if ($scope.query) {
            $location.search({'q': $scope.query});
        } else {
            $location.search({});
        }
    };

    $scope.showMoreResults = function () {
        $location.path('/set').search({'q': $scope.query});
    };

    $scope.getQuestions = function(query) {
        return $http.get(globals.BASE_URL + 'suggest/?q=' + query).then(function (response) {
            return response.data;
        });
    };
});
