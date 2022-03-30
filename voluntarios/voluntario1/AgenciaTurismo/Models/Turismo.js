class Turismo {

    static static_id = 0;

    constructor(country, city, people, salary, airport){
        
        this._id = Turismo.static_id;
        this._country = country;
        this._city = city;
        this._people = people;
        this._salary = salary;
        this._airport = airport;
        Turismo.static_id++;
    }

    aparece(){
        console.log("Funcionou !");
    }

    get id(){
        return this._id;
    }

    get country(){
        return this._country;
    }

    get city(){
        return this._city;
    }

    get people(){
        return this._people;
    }

    get salary(){
        return this._salary;
    }

    get airport(){
        return this._airport;
    }
}