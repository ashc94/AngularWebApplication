
interface IProductController {
    example:string;
}

class ProductController implements  IProductController
{
    example: string;

    constructor() {
        this.example = "Product World";
    }
}


angular.module("app").controller("ProductController", ProductController);