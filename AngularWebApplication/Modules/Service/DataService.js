var app;
(function (app) {
    var common;
    (function (common) {
        var services;
        (function (services) {
            var DataService = (function () {
                function DataService($http) {
                    this.httpService = $http;
                }
                DataService.prototype.getAllProducts = function () {
                    this.httpService.get('/api/service/').success(function (data) {
                        var test = data;
                    });
                };
                return DataService;
            }());
            services.DataService = DataService;
            angular.module("common.services").service("dataService", DataService);
        })(services = common.services || (common.services = {}));
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
