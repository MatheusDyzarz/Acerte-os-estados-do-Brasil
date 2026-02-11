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

var lista = ["acre", "alagoas", "amapa", "amazonas", "bahia", "ceara", "distrito federal", "espirito santo", "goias", "maranhao", "mato grosso", "mato grosso do sul", "minas gerais",
    "para", "parana", "paraiba", "pernambuco", "piaui", "rio grande do sul", "rio de janeiro", "rio grande do norte", "rondonia",
    "roraima", "sao paulo", "santa catarina", "sergipe", "tocantins"];

var listaAcertos = []



botao.onclick = function enviarMensagem() {
    let mensagem = input.value;
    verificarEstado(mensagem)
    input.value = ""
    for (let i=0; i < listaAcertos.length; i++) {
    }
    
}



function verificarEstado(mensagem) {
    
    if (lista.includes(mensagem) && !listaAcertos.includes(mensagem)) {
        listaAcertos.push(mensagem)
        console.log(listaAcertos);
        
        return true
    } else {
        
        return false
    }
} 

function padronizaçao() {

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

    };

