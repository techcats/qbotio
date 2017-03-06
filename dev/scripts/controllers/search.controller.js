app.controller('SearchController', function (globals, $scope, $http, $location) {
    
    var parameters = $location.search()
    if (parameters.q) {
        $scope.query = parameters.q
        $http.get(globals.BASE_URL + 'search/?q=' + $scope.query).then(function (response) {
            $scope.results = response.data;
        });
    }

    $scope.getResults = function() {
        $location.search({'q': $scope.query});
    };

    $scope.getQuestions = function(query) {
        return $http.get(globals.BASE_URL + 'suggest/?q=' + query).then(function (response) {
            return response.data;
        });
    }
});
