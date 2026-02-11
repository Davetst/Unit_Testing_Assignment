const chai = require("chai");
const expect = chai.expect;
const mylib = require("../mylib");

describe("mylib-kirjaston testit", () => {
  before(() => {
    console.log("--- Testaus alkaa ---");
  });

  after(() => {
    console.log("--- Kaikki testit suoritettu ---");
  });

  it("Pitäisi laskea yhteen oikein", () => {
    expect(mylib.add(2, 3)).to.equal(5);
    expect(mylib.add(-1, 1)).to.equal(0);
    expect(mylib.add(-9, 3)).to.equal(-6);
  });
  it("Pitäisi laskea vähennys oikein", () => {
    expect(mylib.subtract(5, 3)).to.equal(2);
    expect(mylib.subtract(0, 1)).to.equal(-1);
  });
  it("Pitäisi laskea kertolasku oikein", () => {
    expect(mylib.multiply(4, 3)).to.equal(12);
    expect(mylib.multiply(-2, 3)).to.equal(-6);
  });
  it("Pitäisi laskea jakolasku oikein", () => {
    expect(mylib.divide(6, 3)).to.equal(2);
    expect(mylib.divide(-6, 2)).to.equal(-3);
  });
  it("Pitäisi antaa virheilmoitus nollalla jakamisesta", () => {
    expect(() => mylib.divide(5, 0)).to.throw();
  });
});
