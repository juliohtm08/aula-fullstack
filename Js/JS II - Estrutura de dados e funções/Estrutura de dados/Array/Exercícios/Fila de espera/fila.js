let fila = [];
let opcao = "";

do {
  //Aqui é aonde será exibido o nome e a ordem dos pacientes na tela
  let pacientes = "";
  for (let i = 0; i < fila.length; i++) {
    pacientes += i + 1 + "º - " + fila[i] + "\n";
  }
  //Aqui exibe quais opções estão disponíveis na tela
  opcao = prompt(
    "Pacientes\n" +
      pacientes +
      "\nEscolha uma opcão:\n1.Novo paciente\n2. Consultar paciente\n3.Sair"
  );
  //Aqui são as funções de cada opção
  switch (opcao) {
    //Aqui Adicionará um novo paciente
    case "1":
      const novoPaciente = prompt("Qual é o nome do paciente?");
      fila.push(novoPaciente);
      break;
    //Aqui será removido o primeiro paciente da fila
    case "2":
      const pacienteConsultado = fila.shift();
      //Aqui exibirá o nome do paciente consultado e também quando não há pacientes na fila
      if (pacienteConsultado) {
        alert(pacienteConsultado + " foi consultado.");
      } else {
        alert("Não há pacientes na fila!");
      }
      break;
    //Aqui encerrará o programa
    case "3":
      alert("encerrando...");
      break;
    default:
      break;
  }
  //Aqui diz que as opções acima serão feitas quando for diferente da opção 3
} while (opcao != "3");
