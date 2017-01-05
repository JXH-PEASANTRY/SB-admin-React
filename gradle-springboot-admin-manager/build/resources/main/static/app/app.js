var MyApp = angular.module('myApp', ['ui.router', 'ngCookies', 'ui.bootstrap', 'ngFileUpload']);

MyApp.config(function ($httpProvider) {
    var header = angular.element("meta[name='_csrf_header']").attr("content");
    var token = angular.element("meta[name='_csrf']").attr("content");
    $httpProvider.defaults.headers.common[header] = token;
});


// 通过全局应用$state服务
MyApp.run(['$rootScope', '$state', function($rootScope, $state) {
    $rootScope.$state = $state
}])



MyApp.controller('UpLoaderController', function ($rootScope, $scope,$state, $stateParams, $http, $timeout,Upload) {
    $scope.submit = function () {
        $scope.upload($scope.file);
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