MyApp.controller('UploadPageController', function ($rootScope, $scope,$state, $stateParams, $http, $timeout,Upload) {
    $scope.startCounts = 1;
    $scope.counts = 100;
    $scope.endCounts = 5;

    $scope.uploadPageInit = function(){
        $scope.setPaginator(1,6,100);
    }

    $scope.submit = function () {
        $scope.upload($scope.file);
    };

    // 分页,参数：分页容器id,当前页，总页数，总条数
    $scope.setPaginator = function (startPage, totalPages, totalCounts) {
        var prevPageShow = 50, // 每页显示条数
            endCurrentPage = (totalCounts > prevPageShow) ? prevPageShow : totalCounts;

        $('#pagintor').jqPaginator({
            totalPages: totalPages,
            visiblePages: 7,
            currentPage: startPage,
            prev: '<li class="prev"><a href="javascript:;">上一页</a></li>',
            next: '<li class="next"><a href="javascript:;">下一页</a></li>',
            page: '<li class="page"><a href="javascript:;">{{page}}</a></li>',
            onPageChange: function (num, type) {
                if (type == "change") {
                    //$scope.search.main(num,$scope.selectList.currentType);
                } else if (type == "init") {
                    $scope.startCounts = 1;
                    $scope.endCounts = endCurrentPage;
                    $scope.counts = totalCounts;
                }
            }
        });
    };


    $scope.upload = function (file) {
        $scope.fileInfo = file;
        Upload.upload({
            //服务端接收
            url: '/uploader',
            //上传的同时带的参数
            file: file
        }).progress(function (evt) {
            //进度条
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progess:' + progressPercentage + '%' + evt.config.file.name);
        }).success(function (data, status, headers, config) {
            //上传成功
            console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
            $scope.uploadImg = data;
        }).error(function (data, status, headers, config) {
            //上传失败
            console.log('error status: ' + status);
        });
    };




})