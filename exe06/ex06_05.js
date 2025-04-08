const prompt = require("prompt-sync")()

let idade = 0
let sexo 
let mediar = 0
let qtdr = 0
for(let i = 0; i < 10; i++){
    idade = Number(prompt('digite a idade '))
    sexo = prompt('digite o sexo : (m ou f): ').toUpperCase()

    if(sexo == 'm'){
        mediah += idade 
        qtdh++
    }else{
mediar += idade
qtdr++
    }

}console.log(`a media da idade dos homens: ${mediah / qtdh}`)
console.log(`a media da idade das mulheres: ${mediar / qtdr}`)







