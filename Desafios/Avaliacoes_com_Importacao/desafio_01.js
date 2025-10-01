

const { gets, print} = require('./funcao_auxiliar_01')

const media = gets();

if (media >= 5 && media < 7){
    print('Sua media foi '+ media +' , voce esta em Recuperação!' )
}
else if (media >= 7){
    print('Sua media foi '+ media +' , voce esta Aprovado!')
}
else if(media>= 0 && media < 5){
    print('Sua media foi'+ media +' , voce esta Reprovado!')
}
else {
    print('Voce colocou um numero Invalido!')
}