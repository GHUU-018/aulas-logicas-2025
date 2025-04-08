const prompt = require('prompt-sync')()

let filmes = ["harry poter 1","harry poter 2","harry poter 3","harry poter 4","harry poter 5","harry poter 6", "harry poter 7"]
filmes.splice(4, 0, 'harry poter e o calice de fogo')
console.log(filmes)