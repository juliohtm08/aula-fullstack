function PhoneNumber(phoneNumberString) {
  const fixedString = phoneNumberString.replace(/[\sa-zA-z]/g, '');
  this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0];
  this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)[0];
  this.number = fixedString.match(/(?<=\)).+/)[0];
}

console.log(new PhoneNumber(' +aaa  +55 (22) 9 9876-5432'));
console.log(new PhoneNumber('+1 (999) 9 as976-5432'));
