
interface IProductController {
    example: string;
    getProducts():void;
}

class ProductController implements  IProductController
{
    example: string;
    static $inject = ["$http"];
    constructor(private $http: angular.IHttpService) {
        this.example = "Product World";
        this.$http = $http;
    }

    getProducts(): void {
        this.$http.get('Data/Product.php')
            .success(response => {
                this.example = response.toString();
            });

    }
}


angular.module("app").controller("ProductController", ProductController);