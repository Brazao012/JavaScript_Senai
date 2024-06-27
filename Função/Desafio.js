const prompt = require("prompt-sync")();

const lista = [
  {
    id: 1,
    tarefa: "Estudar",
    marcada: false,
  },
  {
    id: 2,
    tarefa: "Limpar a casa",
    marcada: false,
  },
  {
    id: 3,
    tarefa: "Cuidar do Dog",
    marcada: false,
  },
];

console.clear();

function mostrarLista() {
  console.log(lista);
}

function adicionarTarefa() {
  const add = String(prompt("Digite a tarefa: "));
  lista.push({
    id: lista.length + 1,
    tarefa: add,
    marcada: false,
  });
}

function marcarTarefa() {
  console.log(lista);
  const boo = Number(prompt("Digite a tarefa que deseja marcar: "));
  lista[boo - 1].marcada = true;
}

function removerTarefa() {
  console.log(lista);
  const rem = Number(prompt("Digite a tarefa que deseja remover: "));

  for (let i = 0; i < lista.length; i++) {
    if (lista[i].id == rem) {
      lista.splice(i, 1);
    }
  }
}

function continuar() {
  prompt.hide("pressione Enter para continuar ...");
}

while (true) {
  console.log(
    `MENU
    1 - ver lista
    2 - adicionar tarefa
    3 - marcar tarefa
    4 - remover tarefa
    5 - encerrar`
  );

  const option = Number(prompt("Digite a opção: "));

  if (option === 5) {
    console.clear();
    console.log("Programa encerrado!");
    break;
  }

  console.clear();

  switch (option) {
    case 1:
      mostrarLista();
      continuar();
      break;
    case 2:
      adicionarTarefa();
      continuar();
      break;
    case 3:
      marcarTarefa();
      continuar();
      break;
    case 4:
      removerTarefa();
      continuar();
      break;
    default:
      console.log("Opção inválida");
      continuar();
  }

  console.clear();
}
