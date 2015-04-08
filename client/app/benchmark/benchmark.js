'use strict';

angular.module('howbighowmanyApp')
.config(function ($stateProvider) {
    $stateProvider
    .state('allBenchmarks', {
        url: '/benchmark',
        templateUrl: 'app/benchmark/all-benchmarks.html',
        controller: 'BenchmarkCtrl'
    })
    .state('benchmark', {
        url: '/benchmark/:benchmarkId',
        templateUrl: 'app/benchmark/benchmark.html',
        controller: 'BenchmarkCtrl'
    });
});
