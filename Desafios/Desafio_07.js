
class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome,peso,altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc () {
        const imc =  (this.peso / (this.altura * this.altura)).toFixed(0);
        return imc;
    }

    classificarImc(){

        const imc = this.calcularImc();

        if (imc > 40) {
            return ("Você esta com Obesidade Grave com IMC de "+ imc)
        }

        else if (imc > 30) {
            return ("Você esta com Obeso com IMC de "+ imc)
        }

        else if (imc > 25) {
            return ("Você esta com Acima do peso com IMC de "+ imc)
        }

        else if (imc > 18.5) {
            return ("Você esta com Peso Normal com IMC de "+ imc)
        }

        else {
            return ("Você esta com Abaixo do peso com IMC de "+ imc)
        }
            }
}

const jose = new Pessoa ('José', 70, 1.75);
const luiz = new Pessoa ('Luiz', 115, 1.92)

console.log (luiz.calcularImc());
console.log (luiz.classificarImc());