

function calcularImc (peso,altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc){
    if (imc >40) {
        return ("Você esta com Obesidade Grave com IMC de " + imc)
    }

    else if (imc >30) {
        return ("Você esta com estado de Obeso com IMC de " + imc)
    }

    else if (imc >25) {
        return ("Você esta com Acima do peso com IMC de " + imc)
    }

    else if (imc >18.5) {
        return ("Você esta com Peso Normal com IMC de " + imc)
    }

    else {
        return ("Você esta com Abaixo do peso com IMC de " + imc)
    }
}

function main(){

    const peso = 112;
    const altura = 1.92;
    const imc = calcularImc ( peso, altura);
    console.log(classificarImc(imc));

}



main ();