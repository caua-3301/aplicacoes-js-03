/*
Crie um novo projeto com uma página que tem um formulário para um objeto baseado em uma classe Transacao, com no mínimo os campos Descrição (texto) e Valor, e um botão Adicionar que ao clicar adicione uma nova transação, mostrada em uma tabela (<table>). Caso a transação seja com valor negativo (despesa), mostre o valor em vermelho, caso seja positivo (receita), mostre em verde. Ao final da tabela, mostre o total de saldo.
*/

/*Variáveis importantes*/
let meusGanhosegastos = [];
let somatorio = 0;

/*Retirando do html*/
let saidaDeDados = document.querySelector("#saida-dados");
let formulario = document.querySelector("#insert");
let valor = document.querySelector("#valor");
let descricao = document.querySelector("#descricao");
let somaValores = document.querySelector("#resumo");

/*Classe que cria o meu objeto, com os itens valor e descricao*/
class informacoes {
    constructor(descricao, valor) {
        this.descricao = descricao;
        this.valor = valor;
    }
}

/*Atualizar soma dos custos*/
function atualizarSoma(valor){
    somatorio += valor;
    somaValores.classList.add(`${somatorio > 0 ? "positivo" : "negativo"}`);
    somaValores.classList.remove(`${somatorio > 0 ? "negativo" : "positivo"}`);
    somaValores.textContent = `Resumo dos valores = ${somatorio}`;
}

/*Funcção que cria uma tag html*/
function criarHtml(objeto) {

    atualizarSoma(objeto.valor);
    let tagHtml = `
        <td class="informacoes ${objeto.valor > 0 ? "positivo" : "negativo"}">${objeto.descricao}</td>
        <td class="informacoes ${objeto.valor > 0 ? "positivo": "negativo"}">${objeto.valor}</td> `;
    return tagHtml;
}

/*Função que cria uma tag html*/
function atualizarLista(objeto) {

    let novoItem = document.createElement("tr");
    novoItem.classList.add("trs")

    novoItem.innerHTML = criarHtml(objeto);

    saidaDeDados.appendChild(novoItem);
}

/*Ativando eventos*/
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let meuObjeto = new informacoes(descricao.value, Number(parseInt(valor.value)));

    meusGanhosegastos = [...meusGanhosegastos, meuObjeto];

    atualizarLista(meuObjeto);
    valor.value = "";
    descricao.value = "";
    descricao.focus();
})

