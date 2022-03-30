class Relogio {

    constructor() {
        this._segundos = 0;

        setInterval(function () {
            console.log(++this._segundos);
          }, 1000);
    }
}

var relogio = new Relogio();