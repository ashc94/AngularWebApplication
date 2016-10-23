var HomeController = (function () {
    function HomeController(dataService) {
        this.dataService = dataService;
        this.dataService = dataService;
        this.dataService.getAllProducts();
    }
    HomeController.$inject = ["dataService"];
    return HomeController;
}());
angular.module("app").controller("HomeController", HomeController);
