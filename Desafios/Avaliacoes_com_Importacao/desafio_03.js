const { gets, print} = require('./funcao_auxiliar_03');

const valorSalario = gets();
const ValorBeneficios = gets();

function calcularPorcentagem (valor,porcentual){
    return valor * (porcentual / 100)
}

function pegarAliquota(salario){
    if(salario >= 0 && salario <= 1100){
        return 5;
    }
    else if (salario >= 1100.01 && salario <= 2000){
        return 10;
    }
    else if (salario > 2000){
        return 15;
    }
    else {
        print('Valor Negativo');
    }
}

const aliquitaImposto = pegarAliquota(valorSalario);

const valorImposto = calcularPorcentagem(valorSalario, aliquitaImposto);

const valorTransferir = valorSalario - valorImposto + ValorBeneficios;

print('Valor a receber: R$ ' + valorTransferir);