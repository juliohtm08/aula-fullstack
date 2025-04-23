const dayjs = require('dayjs');
require('dayjs/locale');
const readline = require('readline');

// Função principal que calcula informações do aniversário
function birthday() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Pergunta ao usuário qual é a data de nascimento
  rl.question(
    'Qual é sua data de nascimento? (formato: YYYY-MM-DD) ',
    (date) => {
      const birthday = dayjs(date, 'YYYY-MM-DD');
      const today = dayjs();

      // Calcula a idade com base na diferença de anos entre agora e a data de nascimento
      const age = today.diff(birthday, 'year');

      // Cria a data do próximo aniversário, usando o mesmo dia/mês, mas com o ano atual
      let nextBirthday = birthday.set('year', today.year());

      // Se o aniversário deste ano já passou, ajusta para o ano que vem
      if (nextBirthday.isBefore(today, 'day')) {
        nextBirthday = nextBirthday.add(1, 'year');
      }

      // Calcula a quantidade de dias até o próximo aniversário
      const daysLeft = nextBirthday.diff(today, 'day');

      console.log(
        `
      Idade Atual: ${age} anos;
      Data de aniversário do próximo ano: ${nextBirthday.format('DD-MM-YYYY')};
      Faltam ${daysLeft} dias para o seu aniversário;
      `
      );
      rl.close();
    }
  );
}

birthday();
