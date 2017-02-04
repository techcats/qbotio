angular.module('QBotIO').controller('SearchController', function ($scope) {
    $scope.getResults = function() {
        $scope.results = [
            "Result1",
            "Result2",
            "Result3"
        ];
    };
});
