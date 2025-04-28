const prompt = require('prompt-sync')()

function funcoes(nr1, nr2, fun){

    if (fun == '+'){
       resultado =(nr1+nr2)
    }
    else if (fun == '-'){
       resultado =(nr1-nr2)
    }
    else if(fun == '*'){
       resultado =(nr1*nr2)
    }
    else if(fun == '/'){
       resultado =(nr1/nr2)
    }
    else if(fun == '**'){
       resultado =(nr1**nr2)
    } 
    return
}

console.log(funcoes(prompt(`digite dois numeros e uma função entre cada uma delas: `)))
funcoes()
