const prompt = require('prompt-sync')()

let nota1 = Number(prompt("Digite sua nota: "))
let nota2 = Number(prompt("Digite sua nota: "))
let media = (nota1 * nota2) / 2

switch (true){
case media > 7 :
    console.log('aprovado')
break
 case media > 5 :
 console.log('recuperação')
 break
case media <= 5 :
 console.log('reprovado')
}