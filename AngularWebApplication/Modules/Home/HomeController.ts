




interface IHomeController {
    example: string;
}

class HomeController implements IHomeController {

    
    example: string;

    
    constructor() {
        
        
    }
}


angular.module("app").controller("HomeController", HomeController);