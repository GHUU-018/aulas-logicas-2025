const prompt = require('prompt-sync')()

let salario = Number(prompt("Digite o seu salario: "))
let cd = salario <= 2000 || salario <= 4000 || salario > 4000

switch (true){
case  salario <= 2000 :
let caulculo1 = salario * 0.12
    console.log(`seu aumento é de ${caulculo1}`)
break
case salario <= 4000 :
    let caulculo2 = salario * 0.10
    console.log(`seu aumento é de ${caulculo2}`)
break
case salario > 4000 :
    let caulculo3 = salario * 0.08
    console.log(`seu aumento é de ${caulculo3}`)
}


