const pessoa = {
    nome: 'Luiz',
    sobrenome:"miranda",
    idade:30,
    endereco: {
        rua:'Av Brasil',
        numero: 320
    }
};
//atribuição via desestruturação
const { endereco: {rua,numero}} = pessoa;

console.log(rua, numero);