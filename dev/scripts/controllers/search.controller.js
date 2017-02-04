app.controller('SearchController', ['globals', '$scope', function (globals, $scope) {
    console.log(globals.BASE_URL);
    $scope.getResults = function() {
        $scope.results = [
            "Result1",
            "Result2",
            "Result3"
        ];
    };
}]);
