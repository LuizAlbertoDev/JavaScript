

const nota1 = 6;
const nota2 = 6;
const nota3 = 2;

const notaMedia = (nota1 + nota2 + nota3) / 3

if (notaMedia > 7) {
    console.log ('Você foi Aprovado com a nota de',notaMedia)
}

else if (notaMedia >= 5) {
    console.log('Você foi para Recuperação com a nota de',notaMedia)
}

else {
    console.log ("Você esta Reprovado com a nota",notaMedia)
}