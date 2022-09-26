function getTimeFromSeconds(seconds) {
  const data = new Date(seconds * 1000);
  return data.toLocaleTimeString("pt-BR", { hour12: false, timeZone: "GMT" });
}

const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");

let timer;
let segundos = 0;

function startClock() {
  timer = setInterval(() => {
    segundos++;
    relogio.innerHTML = getTimeFromSeconds(segundos);
  }, 1000);
}

//aninhamento de eventos de click

document.addEventListener("click", (e) => {
  const elemento = e.target;
  if (elemento.classList.contains("iniciar")) {
    relogio.classList.remove("pausado");
    clearInterval(timer);
    startClock();
  }

  if (elemento.classList.contains("pausar")) {
    relogio.classList.add("pausado");
    clearInterval(timer);
  }

  if (elemento.classList.contains("zerar")) {
    relogio.classList.remove("pausado");
    clearInterval(timer);
    relogio.innerHTML = "00:00:00";
    segundos = 0;
  }
});

/* iniciar.addEventListener("click", (event) => {
  relogio.classList.remove("pausado");
  clearInterval(timer);
  startClock();
});
pausar.addEventListener("click", (event) => {
  relogio.classList.add("pausado");
  clearInterval(timer);
});
zerar.addEventListener("click", (event) => {
  relogio.classList.remove("pausado");
  clearInterval(timer);
  relogio.innerHTML = "00:00:00";
  segundos = 0;
}); */
