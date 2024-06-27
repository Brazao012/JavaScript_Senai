const PromptSync = require("prompt-sync")();

const nome = "a";
const senha = "a123";
PromptSync;
while (true) {
  let loginN = String(PromptSync("Digite seu nome de usuário: "));
  let loginS = PromptSync("Digite sua senha: ");
  if (loginN == nome && loginS == senha) {
    console.log("login realizado com sucesso");
    break;
  } else {
    console.log("Dados Incorretos");
  }
}
