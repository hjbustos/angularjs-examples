(function(){
    var app = angular.module('myApp', []);
    app.controller('MyAppController', function(){
        this.list = todo_list;
        this.item = {}
        
        this.addItem = function (list) {
            list.push(this.item);
            this.item = {};
        };
    });

    var todo_list = [
        {
            titulo: "Ir al super",
            prioridad: "4",
            descripcion: "comprar leche"
        },
        {
            titulo: "Turno en el medico",
            prioridad: "1",
            descripcion: "A las 18hs"
        },
        {
            titulo: "Retirar ropa de lavanderia",
            prioridad: "2",
            descripcion: ""
        },
        {
            titulo: "Limpiar cuarto",
            prioridad: "5",
            descripcion: ""
        },
    ]
})();