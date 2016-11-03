
class Product {
    ProductName: string;

}

interface IProductController {
    productArray: Array<Object>;
    product: Product;
    example:string;
    getProducts():void;
}

const typeMapping: any = {
    'textTool': Product
    //all other types
};

class ProductController implements  IProductController
{
    productArray: Array<Object>;
    product: Product;
    example:string;
    static $inject = ["$http"];
    constructor(private $http: angular.IHttpService) {
        this.$http = $http;
        
    }

   

    getProducts(): void {
        this.$http.get('http://localhost/HudShop/Product.php')
            .then(p => {
                this.productArray = new Array<Object>(p.data);


            });


    }
}


angular.module("app").controller("ProductController", ProductController);