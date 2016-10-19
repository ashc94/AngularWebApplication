
interface IHomeController {
    example: string;
}

class HomeController implements IHomeController {
    example: string;

    constructor() {
        this.example = "Hello World";
    }
}


angular.module("app").controller("HomeController", HomeController);