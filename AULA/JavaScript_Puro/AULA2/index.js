console.log(3 == 3 ? "Sim numero 3 é igual ao 3" : "no no o valor tres n é igual ao tres");


function valor13(){
    console.log("13");
}


function calcular(numero1, numero2){
    let soma = numero1 + numero2;
    console.log(soma);
}

valor13();
calcular(12, 8);

const expressao = function(number1, number2){ return number1 + number2}
console.log(expressao(12, 14));

const resultado200 = function(){ return 100 + 100}
console.log(resultado200());

const arrowFunction = (num1, num2) => num1 + num2; 

console.log(arrowFunction(222, 222));

const arrowFunction1 = () => 500 + 500;

console.log(arrowFunction1());

let divisaoPorZero = 0/3;
console.log(divisaoPorZero);

class Employee{

    constructor(nome, age){
        this.nome = nome;
        this.age = age;
    }

    get Nome(){
        return this.nome;
    }

    get Age(){
        return this.age;
    }
}

let diretora = new Employee("diretoraa", 30);


let autentica = (cargo) => {
    
    let array = [];

    for(let i = 0 ; i<cargo ; i++){
        array.push(i);
    }

    console.log("Login foi feito com sucesso !");
    console.log(array.length);
}



let verificar_login = (Employee, autentica) => {
    if(Employee.Nome == "diretora"){
        console.log("Logando employee " + Employee.Nome);
        autentica(9000);
    }
    else{
        console.log("Logando employee simple " + Employee.Nome);
        autentica(90000); 
    }
}

verificar_login(diretora, autentica);