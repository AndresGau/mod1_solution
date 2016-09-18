(function () {
    'use strict';
    angular.module('LunchCheck', []).
        controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.message = "Enjoy!";
        $scope.items = "";
        $scope.total = calculateItems($scope.items);
        $scope.validateMessage = "";
        console.log("Empieza");

        $scope.enoughtItems = function () {
            $scope.total = calculateItems($scope.items);
            $scope.validateMessage = "";
            if ($scope.total.length > 3) {
                $scope.message = "Too Much";
            } else {
                $scope.message = "Enjoy!";
            }
        };

        $scope.checkEnought = function () {
            console.log("Realizada la llamada " + $scope.total.length);
            if ($scope.items == '') {
                $scope.validateMessage = "Please enter data first";
            } else {
                $scope.validateMessage = "";
            }

        };

        function calculateItems(string) {
            var totalStringValue = string.split(',');
            console.log(totalStringValue.length);
            return totalStringValue;
        };
    };
})();