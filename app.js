(function () {
    'use strict';
    angular.module('myFirstApp', []).
        controller('myFirstController', function ($scope) {
            $scope.name = "Andrés";
            $scope.total = 0;
            console.log("Empieza");
            $scope.displayvalue = function () {
                $scope.total = calculateValue($scope.name);
            };

            function calculateValue(string) {
                var totalStringValue = 0;
                for (var i = 0; i < string.length; i++) {
                    totalStringValue += string.charCodeAt(i);
                }
                return totalStringValue;
            };
        });
})();