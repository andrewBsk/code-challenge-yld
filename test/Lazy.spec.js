const Lazy = require("../src/Lazy");
const should = require("chai").should();

describe("Lazy class", () => {
  it("Should return empty array if no function or initial values are passed", () => {
    const lazy = new Lazy();

    const actual = lazy.evaluate([]);
    const expected = [];
    expected.should.eql(actual);
  });

  it("Should return initial array if no function is passed", () => {
    const lazy = new Lazy();

    const actual = lazy.evaluate([4, 9, 25]);
    const expected = [4, 9, 25];
    expected.should.eql(actual);
  });

  it("Should return correct result if one function is passed", () => {
    const lazy = new Lazy();

    const actual = lazy.add(Math.sqrt).evaluate([4, 9, 25]);
    const expected = [2, 3, 5];
    expected.should.eql(actual);
  });

  it("Should return correct result if two functions are passed (the second with one argument)", () => {
    const lazy = new Lazy();

    const actual = lazy
      .add(Math.sqrt)
      .add(function plus(a, b) {
        return a + b;
      }, 1)
      .evaluate([4, 9, 25]);
    const expected = [3, 4, 6];
    expected.should.eql(actual);
  });

  it("Should return correct result if three functions are passed (the second with one argument and the third with two arguments)", () => {
    const lazy = new Lazy();

    const actual = lazy
      .add(Math.sqrt)
      .add(function plus(a, b) {
        return a + b;
      }, 1)
      .add(
        function minus(a, b, c) {
          return a - b - c;
        },
        1,
        1
      )
      .evaluate([4, 9, 25]);
    const expected = [1, 2, 4];
    expected.should.eql(actual);
  });
});
