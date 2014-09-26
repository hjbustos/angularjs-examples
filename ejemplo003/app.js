(function(){
    var app = angular.module('myApp', []);
    app.controller('MyAppController', function(){
        this.entries = entries
    });

    var entries = [
        {
            name: "Luis",
            last_name: "Mender",
            phone: "156123456",
            favorite: false
        },
        {
            name: "Juan",
            last_name: "Perez",
            phone: "154987654",
            favorite: true
        },
        {
            name: "Cosme",
            last_name: "Fulanito",
            phone: "153654321",
            favorite: false
        }
    ];
})();