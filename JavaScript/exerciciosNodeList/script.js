let section = document.querySelector(".paragrafos");
const paragrafos = section.querySelectorAll("p");

const estilosCorpo = getComputedStyle(document.body);
const planoFundoCorpo = estilosCorpo.backgroundColor;

for (let paragrafo of paragrafos) {
  paragrafo.style.backgroundColor = planoFundoCorpo;
  paragrafo.style.color = "#fff";
}
