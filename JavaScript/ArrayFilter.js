//Retorne os números maiores que 10

const numeros = [5, 10, 20, 30, 2, 24, 100, 225, 22, 11, 13, 27];
//   .filter( )
const maiorQueDez = numeros.filter((obj) => obj > 10);
console.log(maiorQueDez);

const pessoas = [
  { nome: "Caio", idade: 30 },
  { nome: "Mariazinha", idade: 50 },
  { nome: "João", idade: 56 },
  { nome: "Marciano", idade: 34 },
  { nome: "Jonas", idade: 80 },
  { nome: "Julia", idade: 15 },
];

const nomesGrandes = pessoas.filter((obj) => obj.nome.length >= 5);
const idadeMais50 = pessoas.filter((obj) => obj.idade > 50);
const nomesComA = pessoas.filter((obj) => obj.nome.toLowerCase().endsWith("a"));
console.log(nomesGrandes);
console.log(idadeMais50);
console.log(nomesComA);
