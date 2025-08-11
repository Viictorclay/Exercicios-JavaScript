function pedindoValor() {
    let valor = prompt("digite algo: ");
    document.getElementById("saida").textContent = valor;
}

function mostrarTexto() {
    let valor = document.getElementById("entrada").value;
    document.getElementById("saida").textContent = valor
}