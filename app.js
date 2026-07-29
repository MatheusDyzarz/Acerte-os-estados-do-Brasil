let inputReceberNome = document.getElementById("receberNome");
let inputEnviarEstados = document.getElementById("salvarEstados");
let botaoEnviar = document.getElementById("enviar");
let botaoIniciar = document.getElementById("iniciar");
let botaoSalvarEstados = document.getElementById("botaoSalvar");


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
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, ""),
  );
  } catch (error) {
    console.error("Erro ao carregar estados:", error);
  }
}
carregarEstados();

inputReceberNome.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      let mensagem = inputReceberNome.value
        .toLowerCase()
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      verificarEstado(mensagem);

      inputReceberNome.value = "";
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

botaoIniciar.onclick = function () {
  if (cronometro !== null) {
    return;
  }

  cronometro = setInterval(() => {
    segundos++;

    if (segundos === 60) {
      segundos = 0;
      minutos++;
    }

    botaoIniciar.innerText =
      (minutos < 10 ? "0" + minutos : minutos) +
      ":" +
      (segundos < 10 ? "0" + segundos : segundos);
  }, 1000);
};

document
  .getElementById("formularioEstado")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    name = inputEnviarEstados.value.trim();
    if (!inputEnviarEstados) {
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
      ;
      if (!resposta.ok) {
        throw new Error(`Erro ao buscar estados`);
      }

      const dados = await resposta.json();
      document.getElementById("resultado").innerText =
        "Dados enviados com sucesso! Resposta da API: " + JSON.stringify(dados);
    } catch (erro) {
      document.getElementById("resultado").innerText =
        "Falha ao enviar dados: " + erro.message;
    }
  });
