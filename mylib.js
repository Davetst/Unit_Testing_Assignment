const mylib = {
  // Yhteenlaskenta
  add: (a, b) => a + b,

  // Vähennyslaskenta
  subtract: (a, b) => a - b,

  // Kertolaskenta
  multiply: (a, b) => a * b,

  // Jakolaskenta
  divide: (a, b) => {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  },
};

// Viedään kirjasto moduulina
module.exports = mylib;
