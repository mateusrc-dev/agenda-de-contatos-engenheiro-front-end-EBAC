const form = document.getElementById("form-atividade");
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado" />';
const notaMinima = Number(prompt("Digite a nota mínima: "));
const atividades = [];
const notas = [];
let linha;

form.addEventListener("submit", function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade '${inputNomeAtividade.value}' já foi inserida!`);
        linha = "";
    } else {
        atividades.push(inputNomeAtividade.value);
        notas.push(Number(inputNotaAtividade.value));
        
        linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';
    }

    inputNomeAtividade.value = "";
    inputNotaAtividade.value = "";
}



function atualizaTabela() {
    let linhas = ""; /* poderia colocar essa variável no escopo global e toda vez que o evento submit fosse chamado seria acrescentado a nova linha com o valor antigo do 
    submit anterior... */

    const corpoTabela = document.querySelector("tbody");
    linhas = corpoTabela.innerHTML;
    linhas += linha;

    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById("media-final-valor").innerHTML = mediaFinal.toFixed(1);
    const mediaFinalResultado = document.getElementById("media-final-resultado");
    mediaFinalResultado.innerHTML = mediaFinal >= notaMinima ? '<span class="result aprovado">Aprovado</span>' : '<span class="result reprovado">Reprovado</span>';
}   

function calculaMediaFinal() {
    let somaDasNotas = 0;
    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}