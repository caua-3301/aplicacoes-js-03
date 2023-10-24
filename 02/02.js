/*
Crie um novo projeto com uma página que tenha um formulário para adicionar clientes a um banco. Crie uma classe chamada ClienteBanco com os seguintes atributos: Nome, Documento, Saldo. Liste os clientes criados e adicione dois botões em cada um, um para Depositar 100 e outro para Sacar 100. Ao clicar, o objeto em questão deve ter seu saldo alterado, aumentando ou diminuindo seu saldo, e isso deve refletir no que é mostrado na tela.
*/

/*Variaveis importantes*/
let meusClientes = [];

let nome = document.querySelector("#nome");
let documento = document.querySelector("#documento");
let saldo = document.querySelector("#saldo");

let form = document.querySelector("#insert");

let adiciona = document.querySelector(".add");
let remove = document.querySelector(".sub");

/*Classe para criação dos meus objetos*/

class cliente {
    constructor(nome, documento, saldo) {
        this.nome = nome;
        this.documento = documento;
        this.saldo = saldo;
    }
}

//Criar estutura

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let objetoCliente = new cliente(nome.value, documento.value, parseInt(Number(saldo.value)));

    console.log(objetoCliente);

})