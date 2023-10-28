/*
Crie um novo projeto com uma página que tenha um formulário para adicionar clientes a um banco. Crie uma classe chamada ClienteBanco com os seguintes atributos: Nome, Documento, Saldo. Liste os clientes criados e adicione dois botões em cada um, um para Depositar 100 e outro para Sacar 100. Ao clicar, o objeto em questão deve ter seu saldo alterado, aumentando ou diminuindo seu saldo, e isso deve refletir no que é mostrado na tela.
*/

/*Variaveis importantes*/
let meusClientes = [];

let nome = document.querySelector("#nome");
let documento = document.querySelector("#documento");
let saldo = document.querySelector("#saldo");
let exibirClientes = document.querySelector("#lista-clientes")

let form = document.querySelector("#insert");

let adiciona = document.querySelector(".add");
let remove = document.querySelector(".sub");

/*Gerador de ID's*/
function newId(){
    return meusClientes.length + 1;
}

/*Classe para criação dos meus objetos*/
class cliente {
    constructor(nome, documento, saldo) {
        console.log("Objeto criado");
        this.nome = nome;
        this.documento = documento;
        this.saldo = saldo;
        this.id = newId();
    }
}

/*Adicionar cem reais para determinado cliente*/
function adicionarDinheiro(idCliente) {
    meusClientes[idCliente-1].saldo += 100;
    atualizarEstrutura();
}

/*Remover cem reais para determinado cliente*/
function removerDinheiro(idCliente) {
    meusClientes[idCliente-1].saldo -= 100;
    atualizarEstrutura();
}

//Criar estutura/atualizar
function atualizarEstrutura() {

    exibirClientes.textContent = "";

    /*Para cada elemento do meu array, criando um card HTML dinamicamente*/
    for (let cliente of meusClientes) {
        let elementoHtml = `<div class="cont-sub">
        <ul class="lista-info">
            <li><strong>Nome:</strong> ${cliente.nome}</li>
            <li><strong>Documento:</strong> ${cliente.documento}</li>
            <li><strong>Saldo:</strong> ${cliente.saldo}</li>
        </ul>
        <ul class="botoes">
            <button class="add" onclick="adicionarDinheiro(${cliente.id})">+</button>
            <button class="sub" onclick="removerDinheiro(${cliente.id})">-</button>
        </ul>
    </div>`;

        let novoElemento = document.createElement("div");
        /*Inner html inderetamente, tem problema?*/
        novoElemento.innerHTML = elementoHtml;
        exibirClientes.appendChild(novoElemento);
    }

    /*Fins de navegação e praticidade*/
    saldo.value ="";
    documento.value ="";
    nome.value ="";
    nome.focus();
}

form.addEventListener("submit", (e) => {
    e.preventDefault()

    //Criando um objeto tipo "cliente" do banco
    let objetoCliente = new cliente(nome.value, documento.value, parseInt(Number(saldo.value)));

    //Adicionando no meu array
    meusClientes = [...meusClientes, objetoCliente];

    atualizarEstrutura();
})