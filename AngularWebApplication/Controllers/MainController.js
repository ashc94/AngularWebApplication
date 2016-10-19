var MainController = (function () {
    function MainController() {
        this.example = "Hello World";
    }
    return MainController;
}());
angular.module("app").controller("MainController", MainController);
