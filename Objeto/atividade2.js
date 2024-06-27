const carro = {
  marca: "hyundai",
  modelo: "branco",
  ano: 2015,
};
carro.cor = "jacinto";
carro.condicao = "usado";
delete carro.ano;
console.log(carro);
