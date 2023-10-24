/*
Crie um novo projeto com uma página que tenha 1 campo de texto e 1 campo do tipo "datetime-local" e 1 botão com o rótulo "Adicionar". O usuário deve digitar o nome de um evento e selecionar em que horário esse evento (um objeto com os valores selecionados) vai ocorrer. Ao clicar em adicionar, deve ser mostrado na tela a lista de eventos em ordem cronológica, utilizem o método sort de array. Para facilitar o trabalho de mostrar os eventos na tela, veja o método replaceChildren()
*/

/*Variaveis de interesse*/
let eventos = [];


let dataHora = document.querySelector("#selct-data");
let eventoDigitado = document.querySelector("#event");
let exibirEventos = document.querySelector("#events");
let formulario = document.querySelector("#insert")

/*Classe que vai contruir um objeto com as informações do evenyo*/
class objetoEvento {
    constructor(data, horario, descEvento) {
        this.data = data;
        this.horario = horario;
        this.descEvento = descEvento;
    }
}

/*Ativando a funçoão*/
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    
    /*Para fins de formatação, separando a hora da data*/
    let data = dataHora.value.slice(0, 10);
    let horario = dataHora.value.slice(11, 16);

    /*Para praticlar classes, crinando sempre um novo objeto para cada conjunto de informações*/
    let novoObjeto = new objetoEvento(data, horario, eventoDigitado.value);

    /*Tirar dúvida, tags*/
    let novoEvento = document.createElement('p');
    novoEvento.innerHTML = `<div class="my-child">
        <p class="even"><strong>Evento:</strong> ${novoObjeto.descEvento} </p>
        <p class="info">⏰: <strong>${novoObjeto.horario}</strong></p>
        <p class="info">🗓️: <strong>${novoObjeto.data}</strong></p>
    </div>`;

    /*Adicionando em um array*/
    eventos = [...eventos, novoEvento];

    eventos.sort();

    exibirEventos.replaceChildren(...eventos);

    /*Fins estáticos*/
    dataHora.value = null;
    eventoDigitado.value = "";
    dataHora.focus();
})
