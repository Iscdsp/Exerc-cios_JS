//exemplo 1
console.log("Exemplo 1");
try {
  console.log(erroExiste);
} catch (err) {
  console.log("Deu Ruim");
}

function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new ReferenceError`os valores precisam ser numeros`();
  }
  return x + y;
}
//exemplo 2
console.log(" ");
console.log("Exemplo 2");
try {
  console.log(soma("s", 2));
  console.log(soma(4, 1));
} catch (err) {
  console.log("Error");
}

//exemplo 3
console.log(" ");
console.log("Exemplo 3");

try {
  console.log(a);
  console.log("Abri um arquivo");
  console.log("Manipulei o arquivo e gerou erro");
  console.log("Fechei o arquivo");
} catch (e) {
  console.log("Tratando o erro");
} finally {
  console.log("Sempre sou executado");
}
