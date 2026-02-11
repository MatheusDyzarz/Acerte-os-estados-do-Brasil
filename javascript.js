
let input = document.getElementById("receberNome")

var contadorDeEstados = 0

let botao = document.getElementById("enviar")

var lista = ["acre", "alagoas", "amapa", "amazonas", "bahia", "ceara", "distrito federal", "espirito santo", "goias", "maranhao", "mato grosso", "mato grosso do sul", "minas gerais",
    "para", "parana", "paraiba", "pernambuco", "piaui", "rio grande do sul", "rio de janeiro", "rio grande do norte", "rondonia",
    "roraima", "sao paulo", "santa catarina", "sergipe", "tocantins"];

var listaAcertos = []


botao.onclick = function enviarMensagem() {
    let mensagem = input.value;
    verificarEstado(mensagem)
    input.value = ""


}




/*
contador de estados, mostrar pro jogar ex: 13/27
contador de tempo
adicionar a logica de pintar o estado
*/

let contador = 0

function contadorEstados() {
    contador +=1
    console.log(contador+"/27")
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

}










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

