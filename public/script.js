let nome=prompt("Digite seu nome:")

let renda= Number(prompt("Digite sua renda mensal:"))
while (isNaN(renda)) {
    renda = Number(prompt("Valor inválido! Digite sua renda mensal:"));
}

let qtdDespesas=Number(prompt("Digite sua quantidade de despesas(1 a 5)"))
while (isNaN(qtdDespesas)) {
    qtdDespesas = Number(prompt("Valor inválido! Quantas despesas deseja informar? (1 a 5)"));
}

if (qtdDespesas<1) {
    qtdDespesas = 1}
else if (qtdDespesas>5) {
    qtdDespesas=5
}

let totaldespesas=0
for (let i=1;i<=qtdDespesas;i++) {
    let despesa = Number(prompt("Digite o valor da despesa " + i + ":"));
while (isNaN(despesa)) {
    despesa=Number (prompt("Valor inválido!Digite o valor da despesa " + i + ":"))
}
totaldespesas+=despesa
}
let mensagem=""
let sobra=renda-totaldespesas

if (totaldespesas>renda){
    mensagem="Atenção: você gastou mais do que ganhou."}
else {
    if(sobra>=renda*0.3){
    mensagem="Ótimo: boa margem de sobra."
} 
else {
    mensagem="Dá para melhorar a sobra."
}
}
let resultado=
"Simulador de orçamento \n" +
"Nome:" + nome + "\n" +
"Renda: R$ " + renda.toFixed(2) + "\n" +
"Total de despesas: R$ " + totaldespesas.toFixed(2) + "\n" +
"Sobra: R$ " + sobra.toFixed(2) + "\n" +
"Situação: " + mensagem;
alert(resultado);
console.log(resultado)