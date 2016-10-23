module app.common.services {

    interface IDataService {
        getAllProducts(): void;
    }


    export class DataService implements IDataService {

        private httpService: any;

        constructor($http: any) {
            this.httpService = $http;
        }

        getAllProducts(): void {
            this.httpService.get('/api/service/').success(function (data) {
                var test = data;
            }); 
        }
    }

    angular.module("common.services").service("dataService", DataService);
}




    
   




