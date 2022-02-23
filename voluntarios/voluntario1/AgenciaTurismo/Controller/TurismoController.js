class TurismoController {

    constructor(){
        this._city = document.getElementById("city");
        this._country = document.getElementById("country");
        this._people = document.getElementById("people");
        this._salary = document.getElementById("salary");
        this._airport = document.getElementById("airport");
    }

    exibe(event) {
        event.preventDefault();
        console.log("Nome de cidade que vc incluiu: " +  this._city.value);
    }
}