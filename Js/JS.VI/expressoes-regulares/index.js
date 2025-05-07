function PhoneNumber(phoneNumberString) {
  // Remove letras e espaços da string original
  const fixedString = phoneNumberString.replace(/[\sa-zA-Z]/g, '');

  // Captura o código do país (ex: +55, +1)
  this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0];

  // Captura o DDD (número entre parênteses)
  this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)[0];

  // Captura o restante do número, removendo o traço
  this.number = fixedString.match(/(?<=\)).+/)[0].replace(/-/g, '');
}
console.log(new PhoneNumber('+55 (44) 9 1234-5678'));
console.log(new PhoneNumber(' +aaa  +55 (22) 9 9876-5432'));
console.log(new PhoneNumber('+1 (999) 9 as976-5432'));
