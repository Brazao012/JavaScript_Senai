const PromptSync = require("prompt-sync")();

const cambioMoedas = {
  dolar_us: {
    nome: "Dólar Americano",
    codigo: "USD",
    valor_em_real: 5.4,
  },
  euro: {
    nome: "Euro",
    codigo: "EUR",
    valor_em_real: 6.52,
  },
  libra: {
    nome: "Libra Esterlina",
    codigo: "GBP",
    valor_em_real: 7.42,
  },
  iene: {
    nome: "Iene Japonês",
    codigo: "JPY",
    valor_em_real: 0.049,
  },
  dolar_au: {
    nome: "Dólar Australiano",
    codigo: "AUD",
    valor_em_real: 4.14,
  },
};

function d(a) {
  console.log(Math.round(a / 5.4));
}
function e(a) {
  console.log(Math.round(a / 6.52));
}
function l(a) {
  console.log(Math.round(a / 7.42));
}
function i(a) {
  console.log(Math.round(a / 0.049));
}
function da(a) {
  console.log(Math.round(a / 4.14));
}
while (true) {
  const s = Number(PromptSync("qual seu saldo?: "));

  console.log(
    `MENU
    1 - Dólar
    2 - Euro
    3 - Libra
    4 - Iene
    5 - Dolar Australiano
    6 - Encerrar`
  );
  const conv = Number(
    PromptSync("Em qual moeda deseja converter seu saldo?: ")
  );
  if (conv === 6) {
    console.clear();
    console.log("Programa encerrado!");
    break;
  }
  switch (conv) {
    case 1:
      d(s);
      break;
    case 2:
      e(s);
      break;
    case 3:
      l(s);
      break;
    case 4:
      i(s);
      break;
    case 5:
      da(s);
      break;
    default:
      console.log("Opção inválida");
  }
}
