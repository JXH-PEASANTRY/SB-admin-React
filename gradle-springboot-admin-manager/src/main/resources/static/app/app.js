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


MyApp.config(function($stateProvider, $urlRouterProvider) {
    MyApp.resolveScriptDeps = function(dependencies) { // 按需加载服务
        return function($q, $rootScope) {
            var deferred = $q.defer()
            $script(dependencies, function() {
                $rootScope.$apply(function() {
                    deferred.resolve()
                })
            })

            return deferred.promise
        }
    }

    // 定义路由
    // 定义默认路径、重定向
    $urlRouterProvider.otherwise('/page-upload');
    $stateProvider.state('page-upload', {
            url: '/page-upload',
            templateUrl: 'app/view/upload-page.html',
            controller: 'UploadPageController',
            resolve: { // 加载第三方js依赖
                deps:MyApp.resolveScriptDeps([
                    'assets/js/jqPaginator.min.js'
                ])
            }
        })
        .state('time-pick', {
            url: '/time-pick',
            templateUrl: 'app/view/time-pick.html',
            controller: 'TimePickController',
            resolve: { // 加载第三方js依赖
                deps: MyApp.resolveScriptDeps([
                    'assets/js/bootstrap-datetimepicker.js',
                ])
            }
        })

})




