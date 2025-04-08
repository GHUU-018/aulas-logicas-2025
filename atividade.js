const prompt = require("prompt-sync")();



// atividade 1


let numero = Number(prompt('digite um numero'))
console.log(`seu numero é ${numero}`)



//atividade 2
let numero0 = Number(prompt('digite um numero'))


let antecessor = numero -1
let sucessor = numero +1
console.log(`o antecessor de ${numero} é ${antecessor} e o sucessor é ${sucessor} `)


//atividade 3
let numero1 = Number(prompt('digite um numero'))
let dobro = numero1 *2
let triplo = numero1 *3
let cubo = numero1 * numero1 * numero1
console.log(`o dobro de ${numero0} é ${dobro} e o triplo é ${triplo} e elevado ao cubo é ${cubo} `)

//atividade 4

let valor = Number(prompt('digite um numero'))
let valor1 = Number(prompt('digite um numero'))
let soma = valor + valor1
let media = soma /2
console.log(`a média dos alunos são  ${media} `)



//atividade 5

let numero2 = Number(prompt('digite uma medida'))
let centimetros = numero2 * 100
let milimetro = numero2 * 1000
let quilometros = numero2 / 1000
console.log(`o ${numero2} em centimetros é ${centimetros}, em milimetros é ${milimetro} e em quilometros é ${quilometros} `)

//atividade 6

let valor3 = Number(prompt('digite um numero'))
let tabuada1= valor3 *1
console.log(valor * 1)
console.log(valor * 2)
console.log(valor * 3)
console.log(valor * 4)
console.log(valor * 5)
console.log(valor * 6)
console.log(valor * 7)
console.log(valor * 8)
console.log(valor * 9)
console.log(valor * 10)


//atividade 7


let valor4 = Number(prompt('digite a quantia de dinheiro '))
let converao = valor4 / 5.86
console.log(`o quantia em dolar é ${converao}`)


//atividade 8

let valor5 = Number(prompt('digite a altura em metros '))
let valor6 = Number(prompt('digite a largura em metros '))
let area = valor5 * valor6
let tinta = area / 2
console.log(`será necessario ${tinta} de tinta`)

//ativdade 9 

let valor7 = Number(prompt('digite o valor do produto '))
let desconto = valor7 * (5 / 100)
valor7 -= desconto
console.log(`o valor do prouto com desconto será de ${valor7}`)

//atividade 10

let valor8 = Number(prompt('digite quantidade de quilometros rodados '))
let valor9 = Number(prompt('digite a quantidade de dias com o carro '))
let quilometros1 = valor8 * 0.15
let preco = valor9 * 60
let total = quilometros1 + preco
console.log(`o preço a ser pago pelos dias são de ${preco} reais, e pelos quilometros são de ${quilometros1} reais, e o total juntos são ${total} reais.`)
