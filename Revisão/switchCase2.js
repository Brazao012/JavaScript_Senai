const PromptSync = require("prompt-sync")();
let Episódios = Number(PromptSync(" Digite um número: "));

switch (true) {
  case Episódios <= 10:
    console.log("série curta");
    break;
  case (Episódios) => 11 && Episódios <= 100:
    console.log("série média");
    break;
  case Episódios > 100 && Episódios <= 999:
    console.log("série Longa");
    break;
  case Episódios >= 1000:
    console.log("One Piece");
    break;
  default:
    console.log("Não Existe");
}
