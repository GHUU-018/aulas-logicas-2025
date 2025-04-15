let carro = 'Gol;Corsa;Palio;Monza;Fusca;'
let liscarro = carro.split(';')
liscarro.pop()
for(let[posicao, carrro] of liscarro.entries()){
    console.log(`posição ${posicao}: ${carro}`)
}