const elementos = [
  { tag: "p", texto: "frase 1" },
  { tag: "div", texto: "frase 2" },
  { tag: "section", texto: "frase 3" },
  { tag: "footer", texto: "frase 4" },
];

let container = document.querySelector(".container");

const div = document.createElement("div");

for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i];
  let tagCriada = document.createElement(tag);
  tagCriada.innerHTML = texto;
  div.appendChild(tagCriada);
  console.log(`a tag é ${tag} e esse é o texto: ${texto}`);
}

container.appendChild(div);
