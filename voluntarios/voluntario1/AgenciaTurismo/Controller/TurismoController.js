class TurismoController {
  constructor() {
    this._country = document.getElementById("country");
    this._city = document.getElementById("city");
    this._people = document.getElementById("people");
    this._salary = document.getElementById("salary");
    this._airport = document.getElementById("airport");
  }

  exibe(event) {
    event.preventDefault();
    let varr = new Turismo;

    console.log(varr);
  }
}
