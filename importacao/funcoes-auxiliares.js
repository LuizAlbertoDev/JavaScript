const entradas = [11, 50, 10, 98,188,65,54,36,888,975, 23];
let i = 0

function gets (){
    const valor = entradas[i]
    i++;
    return valor;
}

function print (texto){
    console.log(texto);
}

module.exports = { gets, print };