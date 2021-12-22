// class Media {
//   constructor(title) {
//     this._title = title;
//     this._isCheckedOut = false;
//     this._ratings = [];
//   }
//   get title() {
//     return this._title;
//   }
//   get isCheckedOut() {
//     return this._isCheckedOut;
//   }
//   get ratings() {
//     return this._ratings;
//   }
//   set isCheckedOut(value) {
//     this._isCheckedOut = value;
//   }
//   toggleCheckOutStatus() {
//     this._isCheckedOut = !this._isCheckedOut;
//   }
//   //  getAverageRating(){
//   //   return this._ratings.reduce((prev, cur)=>{
//   //        return  (prev +cur)/this._ratings.length;
//   //   },0)
//   // }
//   getAverageRating() {
//     let ratingsSum = this.ratings.reduce(
//       (accumulator, rating) => accumulator + rating
//     );
//     return ratingsSum / this.ratings.length;
//   }

//   addRating(stars) {
//     this.ratings.push(stars);
//   }
// }

// class Book extends Media {
//   constructor(title, author, pages) {
//     super(title);
//     // super(isCheckedOut)
//     // super(ratings)
//     this._pages = pages;
//     this._author = author;
//   }

//   get pages() {
//     return this._pages;
//   }
//   get author() {
//     return this._author;
//   }
// }

// class Movie extends Media {
//   constructor(title, director, runTime) {
//     super(title);
//     // super(isCheckedOut)
//     // super(ratings)
//     this._director = director;
//     this._runTime = runTime;
//   }
//   get director() {
//     return this._director;
//   }
//   get runTime() {
//     return this._runTime;
//   }
// }

// const historyOfEverything = new Book(
//   "Bill Bryson",
//   "A Short History of Nearly Everything",
//   544
// );

// historyOfEverything.toggleCheckOutStatus();
// console.log(historyOfEverything.isCheckedOut);
// historyOfEverything.addRating(4);
// historyOfEverything.addRating(5);
// historyOfEverything.addRating(6);

// console.log(historyOfEverything.getAverageRating());

// const speed = new Movie("Jan de Bont", "Speed", 116);
// speed.toggleCheckOutStatus();
// console.log(speed.isCheckedOut);
// speed.addRating(1);
// speed.addRating(1);
// speed.addRating(5);
// console.log(speed.getAverageRating());

class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
    // "O'" is capitalised here for attribute name
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
    // "O" in "of" is not capitalised
  }
  set numberOfStudents(number) {
    if (typeof number === "number") {
      this._numberOfStudents = number;
    } else {
      return "Invalid input: numberOfStudents must be set to a Number.";
    }
  }

  quickFacts() {
    console.log(
      `${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level`
    );
  }

  pickSubstituteTeacher(substituteTeachers) {
    const randomNum = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randomNum];
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, "high", numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
    return this._sportsTeams;
  }
}

const lorraineHansbury = new PrimarySchool(
  "Lorraine Hansbury",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);

lorraineHansbury.quickFacts();

// School.pickSubstituteTeacher([
//   "Jamal Crawford",
//   "Lou Williams",
//   "J. R. Smith",
//   "James Harden",
//   "Jason Terry",
//   "Manu Ginobli",
// ]);
