//declaração de função padrão (Hoisting), não importa onde for declarada, o motor do JS joga a função para cima.
falaOi();

function falaOi() {
  console.log("Oie");
}

//First-class Objects

// função que cria o dado
const souUmDado = () => {
  console.log("Sou um dado");
};
//função que executa o dado
function executaFuncao(f) {
  f();
}
//chamada da função que executa o dado
executaFuncao(souUmDado);

//Dentro de um objeto

const obj = {
  falar: () => {
    console.log("Console in object function");
  },
};
obj.falar();

// Parâmetros

//arguments não podem ser usados em arrow functions

//exemplo 1
function funcaoParametrada() {
  let i = 0;
  for (i; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
funcaoParametrada("Ois", "alow", 1231, "caralho funfou");

//exemplo 2

function funcaoP(a, b, c) {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }
  console.log(total, a, b, c);
}

funcaoP(1, 2, 3, 4, 5, 6, 7);

//exemplo 3

function fn(a, b = 1, c) {
  console.log(a + b + c);
}
fn(1, null, 20);

//exemplo 4

let objetos = {
  nome: "Caio",
  sobrenome: "Prado",
  idade: 30,
};

function fn({ nome, sobrenome, idade }) {
  let nomin = nome;
  let sobrenomin = sobrenome;
  let idadin = idade;

  let dados = `meu nome é ${nomin} e meu sobrenome é  ${sobrenomin}, sendo minha idade de ${idadin} anos`;
  console.log(dados);
}

fn(objetos);

//exemplo 5
//variável transformada em  function expression com arrow function

// arrow function não se usa **arguments**

const somarTodo = (operador, acumulador, ...numeros) => {
  for (let numero of numeros) {
    if (operador === "+") acumulador += numero;
    if (operador === "-") acumulador -= numero;
    if (operador === "/") acumulador /= numero;
    if (operador === "*") acumulador *= numero;
  }
  console.log(acumulador);
};

somarTodo("+", 0, 21, 43, 54, 64, 12);

//exemplo 5

function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
  };
}

let pessoa1 = criaPessoa("Caio", "Prado");
let pessoa2 = criaPessoa("Marcio", "Carilho");

console.log(typeof pessoa1, pessoa1, typeof pessoa2);

//exemplo 6

function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + " " + resto;
  }
  return falaResto;
}

const fala = falaFrase("olá");
const resto = fala("mundo!");

console.log(resto);

//exemplo 6 - closure

function criaMultiplicador(multiplicador) {
  return (n) => n * multiplicador;
}
const duplicador = criaMultiplicador(2);
const triplicador = criaMultiplicador(3);

console.log(duplicador(3), triplicador(3));
