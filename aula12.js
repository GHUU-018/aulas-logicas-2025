const prompt = require('prompt-sync')();
for(let i = 0; i < 100; i++){
    console.log(i)
}



//levar notebook

for(let nr = 1; nr <= 32; nr++ ){
    let nome = prompt(`Quem é o numero ${nr}`)
    let presente = prompt(`O(A) ${nome} Veio para a escola (S ou N)`)

    if(presente == 's'){
    console.log(`Pegar notebook ${nr}`);
    console.log(`Pegar mouse ${nr}`);
    console.log(`Pegar fonte ${nr}`);
    console.log(`Levar notebook até ${nome}`);
   
}
else{
    presente = "n"
    console.log(`Nao levar notebook${nr}`);
}
}