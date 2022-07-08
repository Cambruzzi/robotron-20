

const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
var cores = ['Amarelo','Azul','Branco','Preto','Rosa','Vermelho']

const seletor = document.querySelectorAll("[data-selecao]")

seletor.forEach(
    (elemento) => {
        elemento.addEventListener("click", (evento) => {
            console.log(evento)
            buscaRobo(evento.target.dataset.selecao,cores)
        })
    }
)

function buscaRobo (operacao,cores){

    const robo = document.querySelector("[data-robo]")

    var alteracor 

    if(operacao === "-") {
        var alteracor = cores.shift()
        robo.src = "img/Robotron 2000 - " + alteracor + "/Robotron 2000 - " + alteracor + ".png"
        cores.push(alteracor)
    }else {
        var alteracor = cores.pop()
        robo.src = "img/Robotron 2000 - " + alteracor + "/Robotron 2000 - " + alteracor + ".png"
        cores.unshift(alteracor)
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        montadorPeca(evento.target.dataset.controle, evento.target.parentNode,evento.target.dataset.peca)
       
    })
})


function montadorPeca(operacao, controle,atualizador) {

    const peca = controle.querySelector("[data-contador]")
    
    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
        estatisticas.forEach( (elemento)=> {
            elemento.textContent = parseInt(elemento.textContent) - pecas[atualizador][elemento.dataset.estatistica]
        })
    }else {
        peca.value = parseInt(peca.value) + 1
        estatisticas.forEach( (elemento)=> {
            elemento.textContent = parseInt(elemento.textContent) + pecas[atualizador][elemento.dataset.estatistica]
        })
    }
}