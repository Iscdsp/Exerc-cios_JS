

// a desestruturação do vetor preenche conforme a indexação do mesmo!
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNumero, segundoNumero, ...resto] = numeros;

console.log("exemplo 01: " + primeiroNumero, segundoNumero, resto);

const [um, , tres, , cinco] = numeros;
console.log( "exemplo 02: " + um,tres,cinco)

const numerados = [
[1,2,3],
[4,5,6],
[7,8,9]
];
//const [, [, , seis],[,oito,]] = numerados
//console.log("exemplo 03: "+seis,oito);
const [lista1,lista2,lista3] = numerados
const NumeroListaUm = lista1[1];
console.log(NumeroListaUm)