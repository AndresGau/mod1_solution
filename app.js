(function () {
    'use strict';
    angular.module('LunchCheck', []).
        controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {

        $scope.items = "";
        $scope.total = calculateItems($scope.items);
        $scope.validateMessage = "";
        console.log("Empieza");

        $scope.enoughtItems = function () {
            $scope.validateMessage = "";
        };

        $scope.checkEnought = function () {
            console.log("Realizada la llamada " + $scope.total.length);
            $scope.total = calculateItems($scope.items);
            if ($scope.items == '') {
                $scope.validateMessage = "Please enter data first";
            } else {
                if ($scope.total.length > 3) {
                    $scope.validateMessage = "Too Much";
                } else {
                    $scope.validateMessage = "Enjoy!";
                };
            };
        };

        function calculateItems(string) {
            var totalStringValue = string.split(',');
            console.log(totalStringValue.length);
            return totalStringValue;
        };
    };
})();