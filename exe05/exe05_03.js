const prompt = require('prompt-sync')()

let entrada
let qtdpar = 0
let somapar = 0
let qtdimpar = 0
let somaimpar = 0
console.log('digite numeros (0 para encerar)')
while(true){
    entrada = parseFloat(prompt("numero: "))

    if(entrada === 0){
        break
    }
if(entrada % 2 == 0){
    somapar = entrada + somapar
    qtdpar++
}
    
      else{
        somaimpar = entrada + somaimpar
        qtdimpar++
      }  
}

console.log(`soma dos pares digitados ${somapar} quantidade ${qtdpar}`)
console.log(`soma dos impares digitados ${somaimpar} quantidade ${qtdimpar}`)