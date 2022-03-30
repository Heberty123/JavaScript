class ListaTurismo {

    constructor(){
        this._listaTurismo = [];
    }

    push(turismo){
        this._listaTurismo.push(turismo);
    }

    remover(id){
        this._listaTurismo.splice(id, 1);
    }

    get listar(){
        return [].concat(this._listaTurismo);
    }
    
}