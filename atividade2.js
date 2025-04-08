const prompt = require("prompt-sync")();

nota1 = Number(prompt('digite a sua nota'))
nota2 = Number(prompt('digite a sua nota'))

let media = (nota1 + nota2) / 2

if(media >= 7){
    console.log('Voce passou de série');
}else{
    console.log('Voce não passou');
   
}

numero1 = Number(prompt('digite um numero'))
numero2 = Number(prompt('digite um numero'))
if(numero1 >= numero2){console.log(`numero 1 maior que numero 2`);
}else{console.log("numero 2 mair que numero 1")
}



let numero = parseInt('digite um numero:')

let resto = numero % 2
if(resto == 0){
    console.log(`${numero} é par`)

}else{
    console.log(`${numero} é impar`)


}
//ano de nascimento
let anonascimento = parseInt(`digite o ano de nascimento`)
if((anonascimento - 2025) >= 18){
    console.log(`voce é maior de idade`)
}else{
    console.log(`voce é menor de idade`)
}

numero3 = Number(prompt('digite um numero'))
numero4 = Number(prompt('digite um numero'))
 if(numero3 == numero4){
    console.log('os numeros são iguais')
 }
 else{
    console.log("os numeros são diferentes");
 }

let velocidade = Number(prompt('digite a velocidade'))
if(velocidade > 80){
    console.log("voce foi multado")
    let multa = (velocidade - 80) * 7
console.log(`o valor da multa é:${multa} `);
}

let vendas = Number( prompt('digite o total de vendas no mês:'))
 
if (vendas > 5000){
    let comissao = vendas * 0.05
    console.log(`a comissão para o mes é de ${comissao}`)
}else{
    let comissao = vendas * 0.05
    console.log()
}













