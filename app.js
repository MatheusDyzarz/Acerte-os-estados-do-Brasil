let input = document.getElementById("receberNome");
let enviar = document.getElementById("enviar");
let iniciar = document.getElementById("iniciar");
let salvarEstados = document.getElementById("botaoSalvar");
let enviarEstados = document.getElementById("salvarEstados");

let lista = [];
let listaAcertos = [];

let contador = 0;

let segundos = 0;
let minutos = 0;
let cronometro = null;

async function carregarEstados() {
  try {
    const response = await fetch("http://localhost:3000/estados");

    if (!response.ok) {
      throw new Error("Erro ao buscar estados");
    }

    const estados = await response.json();

    lista = estados.map((estado) =>
      estado.name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, ""),
    );
  } catch (error) {
    console.error("Erro ao carregar estados:", error);
  }
}

carregarEstados();

enviar.onclick = function () {
  let mensagem = input.value
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  verificarEstado(mensagem);

  input.value = "";
};

document
  .getElementById("receberNome")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      let mensagem = input.value
        .toLowerCase()
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      verificarEstado(mensagem);

      input.value = "";
    }
  });

function verificarEstado(mensagem) {
  if (lista.includes(mensagem) && !listaAcertos.includes(mensagem)) {
    const estadosSvg = document.querySelectorAll("svg path");

    listaAcertos.push(mensagem);

    criarTabela(mensagem);

    contadorEstados();

    estadosSvg.forEach((estado) => {
      let nomeEstado = estado
        .getAttribute("title")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      if (nomeEstado === mensagem) {
        estado.classList.add("acertou");
      }
    });

    return true;
  }

  return false;
}

function contadorEstados() {
  contador++;

  document.getElementById("contador").innerText = `${contador}/27`;
}

function criarTabela(mensagem) {
  const tabela = document.getElementById("tabela");

  const novaLinha = tabela.insertRow();

  const novaCelula = novaLinha.insertCell();

  novaCelula.textContent = mensagem;
}

function popUpFunction() {
  const popup = document.getElementById("mypopup");

  popup.classList.toggle("show");
}

iniciar.onclick = function () {
  if (cronometro !== null) {
    return;
  }

  cronometro = setInterval(() => {
    segundos++;

    if (segundos === 60) {
      segundos = 0;
      minutos++;
    }

    iniciar.innerText =
      (minutos < 10 ? "0" + minutos : minutos) +
      ":" +
      (segundos < 10 ? "0" + segundos : segundos);
  }, 1000);
};

document.getElementById("formularioEstado").addEventListener("submit", async function (event) {

  event.preventDefault(); // Evita recarregar a página

  enviarEstados.value.trim();
  // Validação simples
  if (!enviarEstados) {
    document.getElementById("resultado").innerText =
      "Preencha todos os campos.";
    return;
  }

  try {
    const resposta = await fetch("http://localhost:3000/estado", {
    
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
      }),
    });
    console.log(resposta)
    if (!resposta.ok) {
      throw new Error(`Erro ao buscar estados`);
    }

    const dados = await resposta.json();
    console.log(dados)
    document.getElementById("resultado").innerText =
      "Dados enviados com sucesso! Resposta da API: " + JSON.stringify(dados);
  } catch (erro) {
    document.getElementById("resultado").innerText =
      "Falha ao enviar dados: " + erro.message;
  }
});
