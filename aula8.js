const prompt = require("prompt-sync")();

let altura = Number(prompt(`digite sua altura`))
let peso = Number(prompt('digite o seu peso'))
let imc = peso / (altura ** 2)
if(imc < 18.5){
    console.log(`abaixo do peso ideal`)
}else if (imc >= 18.5 && imc < 25){
    console.log(`peso ideal`)
}else if (imc >= 25 && imc< 30){
    console.log(`sobrepeso`)
}else{
    console.log(`obesidade`)
}

let lado1 = Number(prompt('digite o valor do lado 1'))
let lado2 = Number(prompt('digite o valor do lado 2'))
let lado3 = Number(prompt('digite o valor do lado 3'))
let eq = (lado1 == lado2) && (lado2 == lado3)
let es = (lado1 != lado2) && (lado2 != lado3) && (lado1 != lado3)

console.log(`triangulo equilatero ? ${eq} triangulo escaleno ${es}`)

let horas = Number(prompt('total de horas trabalhadas: '))
let vendas = Number(prompt('total de vendas: '))

 if(vendas > 5000 || horas > 40){
    console.log(`tem direito ao bonus`)
 }
else{
    console.log(`não tem sireito ao bonus`)
}

// 

let letra = (prompt('digite uma letra: '))

if(letra == "a" || letra == "e" || letra =="i" || letra =="o" || letra =="u"){
    console.log(`é uma vogal`)
}
else{
    console.log('é uma consoante')
}

let dia = Number(prompt('digite uma numero de um a sete: '))

if (dia == 1) {
    console.log(`domingo`)
} 
else if (dia == 2){
    console.log("segunda")
}
else if (dia == 3){
    console.log("terça")
}
else if (dia == 4){
    console.log("quarta")
}   
else if (dia == 5){
    console.log("quinta")
}   
else if (dia == 6){
    console.log("sexta")
}   
else if (dia == 7){
    console.log("sabado")
}

let idade = Number(promp("digite seu ano de nascimento"))

if (idade <= 10) {
    console.log("criança")
}
else if (idade <= 17){
    console.log("adolecente")
}
else if(idade <= 59){
    console.log("adulto")
}else if (idade >= 60){
    console.log("idoso")
}







