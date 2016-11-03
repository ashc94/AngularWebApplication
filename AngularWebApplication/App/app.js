

(function () {
    

    var app = angular.module('app', ["ngRoute"]);

    app.config(function ($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/home',
            {
                templateUrl: 'Modules/Home/HomeView.html',
                controller: 'HomeController as vm'
            })
            .when('/product',
            {
                templateUrl: 'Modules/Products/ProductView.html',
                controller: 'ProductController as vm'
            })

        .otherwise("/home");
    });

    




})();