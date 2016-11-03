var Product = (function () {
    function Product() {
    }
    return Product;
}());
var typeMapping = {
    'textTool': Product
};
var ProductController = (function () {
    function ProductController($http) {
        this.$http = $http;
        this.$http = $http;
    }
    ProductController.prototype.getProducts = function () {
        var _this = this;
        this.$http.get('http://localhost/HudShop/Product.php')
            .then(function (p) {
            _this.productArray = new Array(p.data);
        });
    };
    ProductController.$inject = ["$http"];
    return ProductController;
}());
angular.module("app").controller("ProductController", ProductController);
