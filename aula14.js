let frutas = ["maça", "uva", "banana", "abacaxi"]
for(let x = 0; x < frutas.length; x++){
    console.log(`a fruta é ${frutas[x]}`)
}

let listanome = ['bill', 'rafinha', 'raul','esteves', 'viera']
    
    for(let nome of listanome){
        console.log(nome)
    }

    const prompt = require("prompt-sync")()
    let vogais = ['a', 'e', 'i', 'o', 'u']
    let consoantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q'
        , 'r', 's', 't', 'v', 'x', 'y', 'w', 'z']
let letra = prompt('digite uma letra')

if(vogais.includes(letra.toLowerCase())){
    console.log('é uma vogal')
}else if(consoantes.includes(letra.toLowerCase())){
    console.log('é uma consoante')
}else{
    console.log('não é uma letra')
}

let produtos = 'celular, notebook, tv, tablet, headset'
let listaproduto = produtos.split(',')
for(let produtos of listaproduto){
    console.log(produtos)
}

let palavra = 'senai'
for(let letra of palavra){
    console.log(letra)
}





