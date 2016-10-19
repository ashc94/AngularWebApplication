
interface IMainController {
    example:string;
}

class MainController
{
    example: string;

    constructor() {
        this.example = "Hello World";
    }
}


angular.module("app").controller("MainController", MainController);