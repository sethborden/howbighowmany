'use strict';

angular.module('howbighowmanyApp')
.controller('BenchmarkCtrl', function ($stateParams, $http, $scope) {
    $scope.userNumber = null;

    if ($stateParams.benchmarkId) {
        $http.get('/api/benchmarks/' + $stateParams.benchmarkId)
        .success(function(res) {
            $scope.benchmark = res;
        });
    } else {
        $http.get('/api/benchmarks/')
        .success(function(res) {
            $scope.benchmarks = res;
        });
    }

    $scope.submitNumber = function(form) {
        if(form.$valid) {
            var payload = {
                number: $scope.number
            };
            $http.post('/api/benchmarks/' + $stateParams.benchmarkId, payload)
            .success(function(res) {
                $scope.userNumber = $scope.number;
                $scope.benchmark = res;
                $scope.number = '';
                form.$setPristine();
            });
        }
    };

});
