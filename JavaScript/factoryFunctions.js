//funções dentro de objetos são chamadas de métodos
//factory function
function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
    //Setter altera o atributo do objeto!!
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      console.log(this.nome);
    },
    fala(assunto) {
      return `${this.nome} ${
        this.sobrenome
      } está falando sobre ${assunto} e pesa ${
        this.peso
      }kg medindo ${1.8}m de altura`;
    },
    peso,
    altura,
    //o uso do GETTER (get) transforma o método em atributo para ser chamado!
    get imc() {
      const indiceMassa = this.peso / this.altura ** 2;
      return indiceMassa.toFixed(2);
    },
  };
}

const p1 = criaPessoa("Pedro", "Prado", 1.8, 80);

p1.nomeCompleto = "Caio Prado de Arruda Campos Nunes";

console.log(p1.fala("futebol"));
console.log("IMC:" + p1.imc);
