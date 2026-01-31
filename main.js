// Tuodaan oma kirjasto
const laskuri = require("./mylib");

console.log("--- Tervetuloa laskinohjelmaan ---");

//Testataan eri toimintoja
const summa = laskuri.add(10, 5);
const erotus = laskuri.subtract(20, 8);
const tulo = laskuri.multiply(4, 3);

console.log("Summa (10 + 5):", summa);
console.log("Erotus (20 - 8):", erotus);
console.log("Tulo (4 * 3):", tulo);

//Testataan jakolaskua
try {
  const osamaara = laskuri.divide(10, 2);
  console.log("Jakolasku (10 / 2):", osamaara);
} catch (error) {
  console.error("Huomattiin virhe pääohjelmassa:", error.message);
}
console.log("--- Ohjelman suoritus päättyi ---");
