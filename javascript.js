/* ORGANIZÇÃO
    1 - definir a estrutura do projeto (variaveis, listas e o usuario enviar a mensagem e salvar a mensagem em uma variavel)
    2 - definir as funções e o método de verificação para a mensagem que o usuario enviar
        - colocar um botão para enviar o texto
    3 - manipular as listas e implementar a lógica da tabela de estados
    4 - criar a tabela


*/









let input = document.getElementById("receberNome")

var contadorDeEstados = 0

let botao = document.getElementById("enviar")

botao.onclick = function enviarMensagem() {
    let mensagem = input.value;
    verificarEstado(mensagem)
    input.value = ""
}


lista = ["acre", "alagoas", "amapa", "amazonas", "bahia", "ceara", "distrito federal", "espirito santos", "goias", "maranhao", "mato grosso", "mato grosso do sul", "minas gerais",
    "para", "parana", "paraiba", "pernambuco", "piaui", "rio grande do sul", "rio de janeiro", "rio grande do norte", "rondonia",
    "roraima", "sao paulo", "santa catarina", "sergipe", "tocantins"];

listaAcertos = []

)
function verificarEstado(mensagem) {
    if (lista.includes(mensagem) && !listaAcertos.includes(mensagem)) {
        listaAcertos.push(mensagem)
        console.log;
        
        return true
    } else {
        return false
    }
}

