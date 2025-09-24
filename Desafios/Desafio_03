
/* 
1 debito - 10% desconto
2 dinheiro ou pix - 15% desconto
3 cartao de credito até 2x
4 cartao de credito mais que 2x ( 10% juros)
*/

const valorProduto = 100;
const pagamento = 4;
const parcelas = 5;


if (pagamento === 1) {
    console.log ('Você escolheu o pagamento via Debito - Valor Pago R$',(valorProduto-(valorProduto * 0.1)),'Recebeu um desconto de R$',(valorProduto * 0.1),'Desconto de 10%')
}

else if (pagamento === 2) {
    console.log ('Você escolheu o pagamento via Dinheiro ou Pix R$',(valorProduto-(valorProduto * 0.15)),'Recebeu um desconto de R$',(valorProduto * 0.15),'Desconto de 15%')
}

else if (pagamento === 3) {
    console.log ('Você escolheu o pagamento via Cartão de Credito Parcelado em até 2X sem Juros, 2 X R$',(valorProduto/2))
}

else if (pagamento === 4) {
    console.log ('Você escolheu o pagamento via Cartão de Credito Parcelado acima de 2X (com Juros 10%),',(parcelas),'X R$',((valorProduto+(valorProduto * 0.1))/parcelas),'Valor Total R$',(valorProduto+(valorProduto * 0.1)))
}