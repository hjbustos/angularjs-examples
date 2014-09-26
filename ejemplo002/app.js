(function(){
    var app = angular.module('myApp', [])
    app.controller('MyAppController', function(){
        this.entry = entry
        console.log("Loaded:");
        console.log(this.entry)
    });

    var entry = {
        name: "Luis",
        last_name: "Mender",
        phone: "156123456",
        favorite: false
    }
})();