function criaCalculadora() {
  return {
    //atributos do objeto
    display: document.querySelector(".display"),

    //métodos do objeto

    get inicia() {
      this.cliqueBotoes();
    },

    cliqueBotoes() {
      document.addEventListener(
        "click",
        function (e) {
          const el = e.target;

          if (el.classList.contains("btn-num")) {
            this.btnParaDisplay(el.innerText);
          }
        }.bind(this)
      );
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },
  };
}

const calculadora = criaCalculadora();
calculadora.inicia;
