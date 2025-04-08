const prompt = require('prompt-sync')()

let contador = 1;

while(contador <= 5){
    console.log(`o contador é ${contador}`)
    contador = contador + 1
}
console.log('fim')

let senha = '12345'

while(true){
    let senha = prompt('digite a senha : ')
    if(senha == senha){
        console.log('você hackeo a senha')
        break
    }else if (senha == 'desisto'){

        break
    }
}

let soma = 0 
 let qtd = 0 
let encerrar 
while(true){
    let valor = Number(prompt("digite o valor do produto(0 para encerrar): "))
    if(valor == 0 ){
        break
    }
    else{
        soma = soma + valor;
        qtd ++;
    }
}

console.log(`foram informados ${qtd}`)
console.log(`valor total dos produtos ${soma.toFixed(2)}`)


let soma2 = 0 
 let qtd2 = 0 
let encerrar2 
while(true){
    let valor2 = Number(prompt("digite o valor do produto(0 para encerrar): "))
    if(valor2 == 0 ){
        break
    }
    else{
        soma2 = soma2 + valor2;
        qtd2 ++;
    }
}

console.log(`foram informados ${qtd2}`)
console.log(`valor total dos produtos ${soma2.toFixed(2)}`)

console.log('###############################')
console.log("🥺   JOGO DA ADIVINHAÇÃO    🥺")
console.log('###############################')

let nrSORTEADO = Math.floor(Math.random() * 100 + 1)
let acertou = false
while(!acertou){
const chute = parseInt(prompt('🥺 digite entre 1 e 100 para acertar 👉'))

if(chute > nrSORTEADO){
    console.log(`você chutou ${chute} tente um numero `)
}
else if(chute == nrSORTEADO){
    console.log(`você chutou ${chute}, 🎊 parabens você acertou! `)
    acertou = true
}
}
console.log('fim')







