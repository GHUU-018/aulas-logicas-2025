const prompt = require('prompt-sync')()

let idade = Number(prompt("Digite sua idade"))

switch (idade){
case idade >= 0 :
    console.log('criança')
break
 case idade >=11 :
 console.log('adolescente')
 break
case idade >= 18 :
 console.log('adulto')
case idade > 59 :
  console.log('idoso')
break
}





















