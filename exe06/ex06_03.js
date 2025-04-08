const prompt = require("prompt-sync")();

let qntImpar = 0
let qntPar = 0
let soma = 0
for (contador = 0; contador <5; contador++){
    if(nr % 2 == 1){
        qntPar++
        soma = nr + soma
    }
    if(nr % 2 == 1){
        qntImpar++
        soma = nr + soma
    }
}
console.log(`A quantidade de pares sao ${qntPar}`)
console.log(`A quantidade de impares sao ${qntImpar}`)
console.log(`A soma de todos e:${soma}`);