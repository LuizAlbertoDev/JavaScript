class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2025 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }
}

const vitor = new Pessoa('Vitor',25);


const renan = new Pessoa('Renan',30);


console.log(vitor)







