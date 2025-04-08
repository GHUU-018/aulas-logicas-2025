const prompt = require("prompt-sync")();



// ex. 1

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

//ex. 2 

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

// ex. 3

let mes = (prompt("digite um mês: "))
if(mes == "janeiro"){
    console.log("31")
}
else if(mes == "fevereiro"){
    console.log("28")
}
else if(mes == "março"){
    console.log("31")
}
else if(mes == "abril"){
    console.log("30")
}
else if(mes == "maio"){
    console.log("31")
}
else if(mes == "junho"){
    console.log("30")
}
else if(mes == "julho"){
    console.log("31")
}
else if(mes == "agosto"){
    console.log("31")
}
else if(mes == "setembro"){
    console.log("30")
}
else if(mes == "outubro"){
    console.log("31")
}
else if(mes == "novembro"){
    console.log("30")
}
else if(mes == "desembro"){
    console.log("31")
}

// ex. 4

nota = Number(prompt('digite a sua nota'))
nota2 = Number(prompt('digite a sua nota'))

let media = (nota + nota2) / 2
if (media >= 7){console.log("APROVADO");
}else if(media >= 5 && media < 7){console.log("RECUPERAÇÃO");
}else if (media <5){
    console.log("REPROVADO")
}

// ex.5

let salario = Number(prompt("digite seu salario"))
if(salario < 2000){
    console.log(`Seu salario é de ${(salario*12/100) + salario}`)
}
else if (salario >= 2000 && salario <= 4000){
    console.log(`seu salario é de ${(salario*10/100) + salario}`);
}
else{
    console.log(` seu salario e de ${(salario*8/100) + salario}`);
}
 







