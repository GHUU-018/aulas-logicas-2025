function nomeEscola(cidadepara){
escola = "sesi"
console.log(escola);
var cidade = cidadepara
console.log(cidade)
}
var escola = "senai"
console.log(escola)
nomeEscola(araçatuba)
var cidade = "mirandopolis"
console.log(cidade)
var x = 10
console.log('fora da funçao', x)
function minhaFunçao(){
    let x = 0
    x = x + 1
    console.log('dentro da funcao', x)
}
    minhafuncao()
 console.log('dentro da funçao', x)
 /////////////////////////////////
 var x = 10
console.log('fora da funçao', x)
function minhaFunçao(){
    x = x + 1
    console.log('dentro da funcao', x)
}
    minhafuncao()
x +=1
    console.log("fora da funçao", x)