 const nome = prompt("Digite o seu primeiro nome:")
 const sobrenome = prompt("Digite o seu sobrenome:")
 const campoDeEstudo = prompt("Digite o seu campo de estudo:")
 const anoNascimento = prompt("Digite a sua data de nascimento")
 
 alert(
  "Recruta cadastrado com sucesso!\n" + 
  "\nNomeCompleto: " + nome + " " + sobrenome +
  "\nCampo de estudo: " + campoDeEstudo +
  "\nIdade: " + (2023 - anoNascimento)
 )