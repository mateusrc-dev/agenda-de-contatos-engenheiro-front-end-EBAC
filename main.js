const form = document.getElementById("form-atividade");
let linha;
let linhas = "";

form.addEventListener("submit", function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');
        
    linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += '</tr>';

    inputNomeContato.value = "";
    inputNumeroContato.value = "";
}

function atualizaTabela() {
    const corpoTabela = document.querySelector("tbody");
    linhas += linha;

    corpoTabela.innerHTML = linhas;
    linha = "";
}