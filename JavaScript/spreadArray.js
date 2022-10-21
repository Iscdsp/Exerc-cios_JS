const nomes = ["Caio", "Maria", "João", "Jonas", "Marcelo"];
//spread operator
const novo = [...nomes];
// .pop remove o último índice do array e pode encapsular em outra variável...
const removido = novo.pop();

// shift remove do começo e pode encapsular em outra variável...
const removeShift = novo.shift();

//.push inclui um valor ao começo do array
novo.push("Joãozin");

// .unshift inclui um valor no começo do array
novo.unshift("mariazinha");

// slice fatia o array, sendo o primeiro valor o inicio e o segundo o final do fatiamento...
const newer = novo.slice(1, 5);

console.log(newer);
console.log(removeShift);
console.log(novo);
console.log(removido);

const meuNome = "Caio Prado de Arruda Campos Nunes";
// .split divide uma string em array...
const arrayMeuNome = meuNome.split(" ");

const meuNomeDenovo = arrayMeuNome.join(" ");
console.log(arrayMeuNome);
console.log(meuNomeDenovo);

//.splice(índice de início, qnt de delete, add elem1,  add elem2,elem3)

const novoArray = ["a", "b", "c", "d", "e", "f"];
//                                             puxa o array até o final
const novoArrayremovidos = novoArray.splice(1, Number.MAX_VALUE);
console.log(novoArrayremovidos);

// concatenação de arrays

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
//const a3 = a1.concat(a2, [7, 8, 9], "Caio");
// ...(três pontos) = spread operator
const a3 = [...a1, ...a2, ...[7, 8, 9]];
console.log(a3);
