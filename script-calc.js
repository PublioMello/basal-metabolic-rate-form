document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("calc-form");
  const nomeInput = document.getElementById("nome");
  const nameError = document.getElementById("nome-error");
  const resultadoElement = document.getElementById("resultado");
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    //validacao se tem nome
    if (!nomeInput.value) {
      nameError.style.display = "block";
      // event.preventDefault();
      return; //termina a funcao se nao tiver
    } else {
      nameError.style.display = "none";
    }

    //Armazenamento dos dados
    const nome = nomeInput.value;
    const idade = parseFloat(document.getElementById("idade").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const sexo = document.getElementById("sexo").value;
    let gastoCalorico = 0;
    //calculo
    if (sexo == "masculino") {
      gastoCalorico = 66.47 + 13.75 * peso + 5.003 * altura - 6.775 * idade;
    } else {
      gastoCalorico = 655.1 + 9.653 * peso + 1.85 * altura - 4.676 * idade;
    }
    //exibe o resultado
    resultadoElement.innerHTML = `<p>${nome}, seu gasto calórico basal é de ${gastoCalorico.toFixed(
      2
    )}</p>`;

    //adicionar o formdat
    let dados = new FormData(formulario);
    dados.append("gasto_calorico", gastoCalorico.toFixed(2));
    for (let [chave, valor] of dados.entries()) {
      console.log(chave + " : " + valor);
    }

    //reseta o formulario
    formulario.reset();
  });
});
