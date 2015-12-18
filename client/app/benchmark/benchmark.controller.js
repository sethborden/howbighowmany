'use strict';

angular.module('howbighowmanyApp')
.controller('BenchmarkCtrl', function (svgUtilService, $stateParams, $http, $scope) {
    $scope.userNumber = null;
    $scope.showComments = false;

    $scope.downloadSVG = function() {
        var image;
        var link = document.createElement('a');
        var canvas = document.createElement('canvas');
        var svg = svgUtilService.fileize($('gaussian-normal > svg')[0]);
        canvas.setAttribute('width', $('gaussian-normal > svg').width());
        canvas.setAttribute('height', $('gaussian-normal > svg').height());
        canvg(canvas, svg); //jshint ignore:line

        image = canvas.toDataURL('image/png');

        link.setAttribute('href', image);
        link.setAttribute('download', $scope.benchmark.name + '.png');
        link.click();
    };

    $scope.downloadCSV = function() {
        var link = document.createElement('a');
        var output = 'data:text/csv;charset=utf-8,';
        $scope.benchmark.data.forEach(function(row, i) {
            output += [i, row, '\n'].join(',');  
        });
        output = encodeURI(output);
        link.setAttribute('href', output);
        link.setAttribute('download', 'howbighowmany.csv');
        link.click();
    };

    if ($stateParams.benchmarkId) {
        $http.get('/api/benchmarks/' + $stateParams.benchmarkId)
        .success(function(res) {
            $scope.benchmark = res;
            $(document).trigger('benchmark-loaded');
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
