const divResultado = document.getElementById("resultado");
const botaoCalcular = document.getElementById("botao");

function calcularIMC(a, b) {
  return a / (b * b);
}

botaoCalcular.addEventListener("click", function () {
  const inputAltura = parseFloat(document.getElementById("altura").value);
  const inputPeso = parseFloat(document.getElementById("peso").value);
  const inputNome = document.getElementById("nome").value;

  const imc = calcularIMC(inputPeso, inputAltura);

    if (isNaN(imc)) {
        alert('Por favor, insira valores válidos')
    } else {
  divResultado.innerHTML = `Olá, ${inputNome} seu IMC é de ${imc.toFixed(2)}`;
    }

});
