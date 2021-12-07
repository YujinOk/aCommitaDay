// 3/12 OOP in JS
// arrow function wont work with constructor function, only function expression, or declaration works
"use strict";
const Person = function (firstName, birthYear) {
  // Instsance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this! never create method inside of constructor
  this.calcAge = function () {
    console.log(2022 - this.birthYear);
  };
};

// Yujin is an instance of Person class
const Yujin = new Person("Yujin", 1986);
// console.log(Yujin);
// 1. New {} is created
// 2. function is called, 'this' keyword will point to the empty obj => {}
// 3. {} linked to prototype
// 4. function automatically returns {}

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);
// console.log(matilda, jack);
// console.log(Yujin instanceof Person);

// Prototypes
Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};
// console.log(Person.prototype);

Yujin.calcAge();
matilda.calcAge();

// console.log(Yujin.__proto__);
// console.log(Yujin.__proto__ === Person.prototype);
// This prototype is not prototype of Person, instead is what is going to be used as a prototype for all the object that is created by Person constructor function

// console.log(Person.prototype.isPrototypeOf(Yujin));
// console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = "Homo Sapiens";
// console.log(Yujin.species, matilda.species);

// console.log(Yujin.hasOwnProperty("firstName"));
// console.log(Yujin.hasOwnProperty("species"));
// this is because this species property is not inside of the obejct, it has access to it because its prototype of Person
console.log(Yujin.__proto__.__proto__);
// Object.prototype (top of prototype chain -> null)

// console.dir(Person.prototype.constructor);

const arr = [1, 2, 3, 4, 5];
// console.log(arr.__proto__);
// this is how array has access to all these array methods

Array.prototype.unique = function () {
  return [...new Set(this)];
};
// console.log(arr.unique());
// inherit the unique method

// const h1 = document.querySelector("h1");
// console.dir(h1)
// All the dom elements are object behind scene. The _proto_: Element ...huge prototype chain...

// Coding Challenge
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  return this.speed + 10;
};

Car.prototype.brake = function () {
  return this.speed - 5;
};

const bmw = new Car("german", 120);
const hyundae = new Car("korean", 200);

// bmw.accelerate();
// console.log(bmw.accelerate());
// console.log(bmw.brake());

// console.log(hyundae.accelerate());
// console.log(hyundae.brake());

// Class expression
// const PersonCl = class {};

// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
  get age() {
    return 2017 - this.birthYear;
  }
  //   Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }
  static hey() {
    console.log("Hey there");
    console.log(this);
  }
}

// Method in the class but outside of constructor will be prototype of object, not object themselves

const jessica = new PersonCl("Jessica Davis", 1996);
console.log(jessica);

const walter = new PersonCl("Walter White", 1965);

jessica.calcAge();
console.log(jessica.__proto__ === PersonCl.prototype);
console.log(jessica.age);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

// jessica.greet();

// 1. Classes are NOT hoisted
// 2. Class are first-class citizens (clas is special kinda function behind the scene)
// 3. Classes are executed in strict mode
// should we use constructor function? or classes? personal preference

// Getter Setter
const account = {
  owner: "Jonas",
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);

account.latest = 50;
console.log(account.movements);

// Static Method
Person.hey = function () {
  console.log("Hey there");
  console.log(this);
};

Person.hey();
PersonCl.hey();

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = "Steven";
steven.birthYear = 2002;
steven.calcAge();
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1979);
sarah.calcAge();

const team = {
  _players: [
    {
      firstName: "Yujin",
      lastName: "Ok",
      age: 35,
    },
  ],
  _games: [
    {
      opponent: "Chris",
      teamPoints: 42,
      opponentPoints: 27,
    },
  ],
  get_players() {
    return this._players;
  },
  get_games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    this._players.push(player);
  },
  addGame(opp, mypts, opppts) {
    const game = {
      opponent: opp,
      teamPoints: mypts,
      opponentPoints: opppts,
    };
    this._games.push(game);
  },
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

team.addGame("Tina", 100, 98);
console.log(team._players);
console.log(team._games);
