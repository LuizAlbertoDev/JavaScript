class Carro {
    marca;
    cor;
    gastoKM;
    gastoMedio;

    constructor(marca, cor, gastoKM){
        this.marca = marca;
        this.cor = cor;
        this.gastoKM = gastoKM;
    }

    calcularGastoViagem(distancia,precoCombustivel){
        const litros = distancia / this.gastoKM;
        const custo = litros * precoCombustivel;
        return custo.toFixed(2);
    }
}

const carro1 = new Carro ('Onix', 'Preto',18);
const carro2 = new Carro ('Logan', 'Branco', 16);

const percurso = 73;
const precoCombustivel = 6.69

console.log(carro1.calcularGastoViagem(percurso,precoCombustivel))
console.log(carro2.calcularGastoViagem(percurso,precoCombustivel))
