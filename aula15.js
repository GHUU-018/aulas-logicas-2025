const prompt = require("prompt-sync")()

function cabecalho(texto){
    console.log('-------------------')
    console.log(texto)
    console.log('-------------------')
}

function saudacao(){
    let nome = prompt('digite o seu nome')
    console.log(`${nome} tenha um bom dia.`)
}

cabecalho('sesi/senai')
let escola = 'sesi-025'
cabecalho(escola)
saudacao()


function soma(n1, n2){
    let resultado = n1 + n2
    console.log(resultado)
}
soma(5,6)
soma(8,9)
soma(8,18)


function parimpar(tipo){
    let tipo = Number(prompt(tipo))
    if(tipo%2==0){
        console.log('seu numeroé par');
    }else{
        console.log('seu numero é impar');
        
    }
}
parimpar('digite um numero: ')