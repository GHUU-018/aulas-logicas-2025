const prompt = require('prompt-sync')()


function tabuadadonumero(numeros){
    for (let i = 0; i <= 10; i++){
        console.log(`${numeros} vezes ${i} é igual a ${numeros*i}`)
    }
    }
tabuadadonumero(numeros = Number(prompt('digite um numero da taboada até 10')))