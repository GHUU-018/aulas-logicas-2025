function senha(qntdNR){
    for (let i = 0; i <= 10; i++){
        console.log(Math.floor(Math.random() * 9 + 1))
    }
}
senha(Number(prompt('digite o tamanho da sua senha')))