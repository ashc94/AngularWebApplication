var ProductController = (function () {
    function ProductController($http) {
        this.$http = $http;
        this.example = "Product World";
        this.$http = $http;
    }
    ProductController.prototype.getProducts = function () {
        var _this = this;
        this.$http.get('Data/Product.php')
            .success(function (response) {
            _this.example = response.toString();
        });
    };
    ProductController.$inject = ["$http"];
    return ProductController;
}());
angular.module("app").controller("ProductController", ProductController);
