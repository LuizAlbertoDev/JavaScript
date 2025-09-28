const idade = 17;

function escreverNome (name) {
    return name;
}

escreverNome('luiz');


function maiorIdade(idade){
    if (idade >= 18){
        console.log('Você é maior de idade, você tem '+ idade +' anos');
    }
    else {
        console.log('Você é menor de idade, você tem '+ idade +' anos');
    }
}
maiorIdade(idade);