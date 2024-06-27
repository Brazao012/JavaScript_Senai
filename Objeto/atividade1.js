const pessoa = {
  nome: "Malacói",
  idade: 154,
  profissão: "Perigo",
  País: "Peru",
};
console.log(pessoa["nome"], pessoa["idade"]);
pessoa.profissão = "vendedor da shopee";
pessoa.email = "malacoi@aloalo.com.br";
delete pessoa.País;
console.log(pessoa);
