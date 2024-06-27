let dado = 20;
let contador = 0;
let objetivo = 0;

while (true) {
  let face = Math.random() * dado;
  face = Math.ceil(face);
  console.log("O número que você tirou no dado foi " + face);
  contador++;
  if (face < 2) {
    console.log("Você voltou 1 casa no jogo");
    objetivo = objetivo - 1;
  }
  if (face >= 2 && face < 12) {
    console.log("Você não avançou");
    objetivo = objetivo + 0;
  }
  if (face >= 12 && face < 20) {
    objetivo = objetivo + 1;
    console.log("Você avançou 1 espaço");
  }
  if (face == 20) {
    console.log("Você avancou 10 espaços");
    objetivo = objetivo + 10;
  }
  if (objetivo >= 10) {
    console.log("Você Ganhou! utilizando o dado " + contador + " vezes");
    break;
  }
}
