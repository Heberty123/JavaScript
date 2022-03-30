class Mensagem {

    constructor(){
        this._DomMensagem = document.querySelector(".divMensagens");
    }


    exibir(mensagens){
        this._DomMensagem.innerText = mensagens;
    }
}