/// <reference path="../../typings/jquery/jquery.d.ts" />

MyApp.directive('sidebar', function() {
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        scope: {},
        template: '<section class="sidebar">\
                    <ul class="sidebar-menu" ng-transclude>\
                    </ul>\
                </section>'
    };
})


MyApp.directive('sidebarhead', function($location) {
    return {
        restrict: 'EA',
        scope: {
            headerContent: '@'
        },
        require: '^?sidebar',
        replace: true,
        transclude: true,
        template: '<li class="header">{{headerContent}}</li>'
    };
});

MyApp.directive('panel', function($location) {
    return {
        restrict: 'EA',
        scope: {
            panelIcon: '@',
            panelTitle: '@',
            isActive: '@'
        },
        require: '^?sidebar',
        replace: true,
        transclude: true,
        template: '<li data-sidebaritem="firstMenu" class="treeview {{isActive}}">\
                        <a href="javascript:void(0)"><i class={{panelIcon}}></i><span>{{panelTitle}}</span>\
                            <span class="pull-right-container">\
                                <i class="fa fa-angle-left pull-right"></i>\
                            </span>\
                        </a>\
                        <ul class="treeview-menu" ng-transclude>\
                        </ul>\
                    </li>',
        link: function($scope, $element, attrs) {

            this.init = function() {
                this.bindEvents();
            };

            this.leftMenu = {
                firstMenu:function(e){
                    var $thisItem = $(e.target).closest('li[data-sidebaritem ="firstMenu"]');

                    $thisItem.addClass('active')
                        .siblings('li').removeClass('active')
                        .children('.treeview-menu').removeClass('menu-open').hide();
                },

                subMenu:function(e){
                    var $thisItem = $(e.target).closest('li[data-sidebaritem = "subMenu"]');

                    $thisItem.addClass('active')
                        .siblings('li').removeClass('active');
                        
                    $thisItem.parents('li[data-sidebaritem="firstMenu"]')
                        .siblings('li').find('li[data-sidebaritem = "subMenu"]')
                        .removeClass('active')
                }
            };

            this.bindEvents = function() {

                // 一级目录，包括panel
                $(document)
                    .on('click', 
                    '.sidebar li[data-sidebaritem = "firstMenu"]',
                    this.leftMenu.firstMenu.bind(this));

                // 一级目录，包括panel
                $(document)
                    .on('click', 
                    '.sidebar li[data-sidebaritem = "subMenu"]',
                    this.leftMenu.subMenu.bind(this));
            };

            this.init();
        }
    };
});