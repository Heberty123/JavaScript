class TurismoController {
  constructor() {
    this._country = document.getElementById("country");
    this._city = document.getElementById("city");
    this._people = document.getElementById("people");
    this._salary = document.getElementById("salary");
    this._airport = document.getElementById("airport");

    this._listaTurismo = new ListaTurismo();
    this._turismoViewTabela = new TurismoViewTabela();
    this._turismoViewTabela.update(this._listaTurismo.listar);
    this._mensagem = new Mensagem();
  }

  acao(event) {
    event.preventDefault();

    this._listaTurismo.push(new Turismo(this._country.value, this._city.value, this._people.value, this._salary.value, this._airport.value)); 
    this._mensagem.exibir("Viagem cadastrada com sucesso !");
    this._turismoViewTabela.update(this._listaTurismo.listar);
    this._limpaForm();
    console.log(this._listaTurismo.listar);
  }

  removeChield(event, id){
    event.preventDefault();
    let i = 0;
    this._listaTurismo.listar.forEach(n => {
      if(n.id == id){
        this._listaTurismo.remover(i);
      }
      i++;
    })
    this._mensagem.exibir("Registro removido com sucesso !");
    this._turismoViewTabela.update(this._listaTurismo.listar);
    console.log(this._listaTurismo.listar);
  }


  _limpaForm(){
    this._country.value = "";
    this._city.value = "";
    this._people.value = 0; 
    this._salary.value = ""; 
    this._airport.value = ""; 
  }


}
