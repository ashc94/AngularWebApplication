




interface IHomeController {
    example: string;
}

class HomeController implements IHomeController {

    
    example: string;

    static $inject = ["dataService"];
    constructor(private dataService: app.common.services.DataService) {
        
        this.dataService = dataService;
        this.dataService.getAllProducts();
    }
}


angular.module("app").controller("HomeController", HomeController);