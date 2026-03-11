
let input = document.getElementById("receberNome")

var contadorDeEstados = 0

let enviar = document.getElementById("enviar")

var lista = ["acre", "alagoas", "amapa", "amazonas", "bahia", "ceara", "distrito federal", "espirito santo", "goias", "maranhao", "mato grosso", "mato grosso do sul", "minas gerais",
    "para", "parana", "paraiba", "pernambuco", "piaui", "rio grande do sul", "rio de janeiro", "rio grande do norte", "rondonia",
    "roraima", "sao paulo", "santa catarina", "sergipe", "tocantins"];

var listaAcertos = []


enviar.onclick = function enviarMensagem() {
    let mensagem = input.value;
    verificarEstado(mensagem)
    input.value = ""


}

function popUpFunction () {
    //let help = document.getElementById("help")
    var popup = document.getElementById("mypopup");
  popup.classList.toggle("show");
}




/* adicionar a logica de pintar o estado*/

function pintarEstados(mensagem) {
const containerAcerto = document.getElementById("acerto");
    const circulo = document.createElement("div");
    circulo.className = "circulo";
    containerAcerto.appendChild(circulo);
}




let segundos = 0;
let minutos = 0;
let cronometro = null;
let iniciar = document.getElementById("iniciar")

if (cronometro == null) {
    iniciar.onclick = function cronometro() {
        iniciar = setInterval(function () {
            segundos++;
            if (segundos == 60) {
                segundos = 0;
                minutos++;
            }

            document.getElementById("iniciar").innerText =
                (minutos < 10 ? "0" + minutos : minutos) + ":" +
                (segundos < 10 ? "0" + segundos : segundos);

        }, 1000);
    }
}


let contador = 0

function contadorEstados() {
    contador += 1
    document.getElementById("contador").innerText = (contador + "/27");
    
}


function verificarEstado(mensagem) {

    if (lista.includes(mensagem) && !listaAcertos.includes(mensagem)) {
        listaAcertos.push(mensagem)
        criarTabela(mensagem)
        contadorEstados()
    } else {
        return false
    }
}

function criarTabela(mensagem) {

    const criarTabela = document.getElementById("tabela");
    const novaLinha = tabela.insertRow();
    const novaCelula = novaLinha.insertCell();
    novaCelula.textContent = mensagem;
    
    pintarEstados(mensagem);
    
}











//mostrar ao usuario a tabela padronizada

/* function padronizacao() {

    const padronizados = {
        "acre": "Acre",
        "alagoas": "Alagoas",
        "amapa": "Amapá",
        "amazonas": "Amazonas",
        "bahia": "Bahia",
        "ceara": "Ceará",
        "distrito federal": "Distrito Federal",
        "espirito santo": "Espírito Santo",
        "goias": "Goiás",
        "maranhao": "Maranhão",
        "mato grosso": "Mato Grosso",
        "mato grosso do sul": "Mato Grosso do Sul",
        "minas gerais": "Minas Gerais",
        "para": "Pará",
        "parana": "Paraná",
        "paraiba": "Paraíba",
        "pernambuco": "Pernambuco",
        "piaui": "Piauí",
        "rio de janeiro": "Rio de Janeiro",
        "rio grande do norte": "Rio Grande do Norte",
        "rio grande do sul": "Rio Grande do Sul",
        "rondonia": "Rondônia",
        "roraima": "Roraima",
        "sao paulo": "São Paulo",
        "santa catarina": "Santa Catarina",
        "sergipe": "Sergipe",
        "tocantins": "Tocantins"
    };

};  */
