const prompt = require('prompt-sync')()

let palavra = prompt('digite uma palavra: ')
let qtdvogais = 0 
let vogais = ['a', 'e', 'i', 'o', 'u']
for(let letra of palavra){
    if(vogais.includes(letra)){
        console.log(palavra)
        qtdvogais++
     }
}
console.log(`${palavra} tem ${qtdvogais} vogais`)
