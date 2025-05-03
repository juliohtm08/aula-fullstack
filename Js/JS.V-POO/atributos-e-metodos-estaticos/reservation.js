class Reservation {
  constructor(guests, room, days) {
    this.guests = guests;
    this.room = room;
    this.days = days;
    this.total = days * Reservation.basefee;
  }

  static basefee = 150;

  static showBaseFee() {
    console.log(`base fee is ${Reservation.basefee}`);
  }

  static get premiumFee() {
    return Reservation.basefee * 1.5;
  }
}

Reservation.showBaseFee();

const r1 = new Reservation(3, '201', 5);
console.log(r1);

Reservation.basefee = 200;

const r2 = new Reservation(2, '104', 2);
console.log(r2);

console.log(`Premium fee is ${Reservation.premiumFee}`);
