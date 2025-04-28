let dolar = 5.68
let euro = 6.46
function conversao(real){
console.log(`${(real).toFixed(2)} reais, é igual à: ${(real/dolar).toFixed(2)}
dolar(es) e ${real/euro}`)
}
conversao(1)
conversao(5.68)
conversao(6.46)
conversao(100)
