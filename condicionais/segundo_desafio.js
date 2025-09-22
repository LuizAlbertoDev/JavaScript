

const precoEtanol = 5.50;
const precoGasolina = 6.50;
const combustivel = 'gasolina'
let gastoMedioKM = 10;
const distanciaViagemKM = 200;

let precoCombustivel = '';


if (combustivel === 'gasolina'){
        precoCombustivel = precoGasolina
        gastoMedioKM = 10;
    }

else if (combustivel === 'etanol'){
    precoCombustivel = precoEtanol
    gastoMedioKM = 7;
    }

const valorViagem =(distanciaViagemKM/gastoMedioKM)*precoCombustivel;

console.log('O carro esta abastecido com ' ,combustivel , ' e esta no valor de', precoCombustivel,'R$');
console.log ('O carro gasta em torno de',(valorViagem.toFixed(2)),'R$ para fazer uma viagem de',distanciaViagemKM,'Kilometros');




