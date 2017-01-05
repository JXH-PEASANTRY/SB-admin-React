MyApp.controller('TimePickController', function ($rootScope, $scope,$state, $stateParams, $http, $timeout) {

    $scope.timePickInit = function(){
        $scope.datePicker.setDatePicker();
    }


    $scope.datePicker = {
        startDateUTC: null,
        endDateUTC: null,
        // init datepicker
        setDatePicker: function () {
            $('#start').datetimepicker({
                    language: 'zh-CN',
                    format: 'yyyy-mm-dd',
                    autoclose: 1,
                    minView: 2
                })
                .on('changeDate', function (ev) {
                    var currentDate = moment(ev.date).format("YYYY-MM-DD");

                    $scope.datePicker.startDateUTC = ev.date;
                    $('#end').datetimepicker('setStartDate', currentDate);
                });

            $('#end').datetimepicker({
                    language: 'zh-CN',
                    format: 'yyyy-mm-dd',
                    autoclose: 1,
                    minView: 2
                })
                .on('changeDate', function (ev) {
                    var currentDate = moment(ev.date).format("YYYY-MM-DD");

                    $scope.datePicker.endDateUTC = ev.date;
                    $('#start').datetimepicker('setEndDate', currentDate);
                });
        }
    }


})