const prompt = require("prompt-sync")()

let listNome = []
function addNome(nome){
listNome.push(prompt('digite um nome para adicionar a lista:'))
console.log(listNome)
}
function romeveNome(){
    listNome.pop()
    console.log(listNome)
}
addNome()
addNome()
romeveNome()
addNome()