'use strict';

angular.module('howbighowmanyApp')
.controller('MainCtrl', function ($http, $scope) {
    $scope.newBenchmark = {
        minimum: 0,
        maximum: 100
    };
    $scope.mainMessage = 'add-benchmark-form';

    $scope.createBenchmark = function(form) {
        if(form.$valid) {
            $http.post('/api/benchmarks', $scope.newBenchmark)
            .success(function(res) {
                $scope.mainMessage = 'benchmark-added';
                $scope.newBenchmarkLink = '/benchmark/' + res._id;
            });
        }
    };

});
