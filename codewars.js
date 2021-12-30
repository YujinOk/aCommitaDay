//30/12 Codewars
const isPrime = (number) => {
  if (number == 2 || number == 3) {
    return true;
  }

  if (number % 2 == 0 || number % 3 == 0) {
    return false;
  }

  let divisor = 6;
  while (divisor * divisor - 2 * divisor + 1 <= number) {
    if (number % (divisor - 1) == 0) {
      return false;
    }

    if (number % (divisor + 1) == 0) {
      return false;
    }

    divisor += 6;
  }
  return true;
};

function nextPrime(n) {
  // Base case
  if (n <= 1) return 2;

  let prime = n;
  let found = false;

  // Loop continuously until isPrime returns
  // true for a number greater than n
  while (!found) {
    prime++;

    if (isPrime(prime)) found = true;
  }

  return prime;
}

nextPrime(5);

// Best Practices Answers
const nextPrime = (n) => (isPrime(n + 1) ? n + 1 : nextPrime(n + 1));

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }

  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

// SOLUTION I liked
function nextPrime(n) {
  let m = n > 1 ? n + 1 : 2;

  for (let i = 2; i * i <= m; i++) if (m % i === 0) return nextPrime(m);

  return m;
}

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  let splitDna = dna.split("");
  // console.log(splitDna);
  let rnaConvert = "";
  // console.log(rnaConvert);

  for (let i = 0; i < splitDna.length; i++) {
    if (splitDna[i] === "T") {
      rnaConvert += "U";
    } else {
      rnaConvert += splitDna[i];
      console.log(rnaConvert);
    }
  }

  return rnaConvert;
}

// BEST SOLUTIONS
const isPrime = (number) => {
  if (number == 2 || number == 3) {
    return true;
  }

  if (number % 2 == 0 || number % 3 == 0) {
    return false;
  }

  let divisor = 6;
  while (divisor * divisor - 2 * divisor + 1 <= number) {
    if (number % (divisor - 1) == 0) {
      return false;
    }

    if (number % (divisor + 1) == 0) {
      return false;
    }

    divisor += 6;
  }
  return true;
};

function nextPrime(n) {
  // Base case
  if (n <= 1) return 2;

  let prime = n;
  let found = false;

  // Loop continuously until isPrime returns
  // true for a number greater than n
  while (!found) {
    prime++;

    if (isPrime(prime)) found = true;
  }

  return prime;
}

nextPrime(5);

// Best Practices Answers
const nextPrime = (n) => (isPrime(n + 1) ? n + 1 : nextPrime(n + 1));

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }

  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

// SOLUTION I liked
function nextPrime(n) {
  let m = n > 1 ? n + 1 : 2;

  for (let i = 2; i * i <= m; i++) if (m % i === 0) return nextPrime(m);

  return m;
}

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  let splitDna = dna.split("");
  // console.log(splitDna);
  let rnaConvert = "";
  // console.log(rnaConvert);

  for (let i = 0; i < splitDna.length; i++) {
    if (splitDna[i] === "T") {
      rnaConvert += "U";
    } else {
      rnaConvert += splitDna[i];
      console.log(rnaConvert);
    }
  }

  return rnaConvert;
}

// BEST SOLUTIONS
const isPrime = (number) => {
  if (number == 2 || number == 3) {
    return true;
  }

  if (number % 2 == 0 || number % 3 == 0) {
    return false;
  }

  let divisor = 6;
  while (divisor * divisor - 2 * divisor + 1 <= number) {
    if (number % (divisor - 1) == 0) {
      return false;
    }

    if (number % (divisor + 1) == 0) {
      return false;
    }

    divisor += 6;
  }
  return true;
};

function nextPrime(n) {
  // Base case
  if (n <= 1) return 2;

  let prime = n;
  let found = false;

  // Loop continuously until isPrime returns
  // true for a number greater than n
  while (!found) {
    prime++;

    if (isPrime(prime)) found = true;
  }

  return prime;
}

nextPrime(5);

// Best Practices Answers
const nextPrime = (n) => (isPrime(n + 1) ? n + 1 : nextPrime(n + 1));

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }

  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

// SOLUTION I liked
function nextPrime(n) {
  let m = n > 1 ? n + 1 : 2;

  for (let i = 2; i * i <= m; i++) if (m % i === 0) return nextPrime(m);

  return m;
}

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  let splitDna = dna.split("");
  // console.log(splitDna);
  let rnaConvert = "";
  // console.log(rnaConvert);

  for (let i = 0; i < splitDna.length; i++) {
    if (splitDna[i] === "T") {
      rnaConvert += "U";
    } else {
      rnaConvert += splitDna[i];
      console.log(rnaConvert);
    }
  }

  return rnaConvert;
}

// BEST SOLUTIONS
const isPrime = (number) => {
  if (number == 2 || number == 3) {
    return true;
  }

  if (number % 2 == 0 || number % 3 == 0) {
    return false;
  }

  let divisor = 6;
  while (divisor * divisor - 2 * divisor + 1 <= number) {
    if (number % (divisor - 1) == 0) {
      return false;
    }

    if (number % (divisor + 1) == 0) {
      return false;
    }

    divisor += 6;
  }
  return true;
};

function nextPrime(n) {
  // Base case
  if (n <= 1) return 2;

  let prime = n;
  let found = false;

  // Loop continuously until isPrime returns
  // true for a number greater than n
  while (!found) {
    prime++;

    if (isPrime(prime)) found = true;
  }

  return prime;
}

nextPrime(5);

// Best Practices Answers
const nextPrime = (n) => (isPrime(n + 1) ? n + 1 : nextPrime(n + 1));

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }

  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

// SOLUTION I liked
function nextPrime(n) {
  let m = n > 1 ? n + 1 : 2;

  for (let i = 2; i * i <= m; i++) if (m % i === 0) return nextPrime(m);

  return m;
}

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  let splitDna = dna.split("");
  // console.log(splitDna);
  let rnaConvert = "";
  // console.log(rnaConvert);

  for (let i = 0; i < splitDna.length; i++) {
    if (splitDna[i] === "T") {
      rnaConvert += "U";
    } else {
      rnaConvert += splitDna[i];
      console.log(rnaConvert);
    }
  }

  return rnaConvert;
}

// BEST SOLUTIONS
function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}
