const prompt = require('prompt-sync')();

let comidas = []

for( let i = 0; i < 6; i ++){
    let comidas = prompt(`Digite o nome da comida ${ i + 1}`)
comidas.push(comida)
}
console.log(comidas);
// EXIBA A PRIMEIRA COMIDA
console.log(comidas [0]);