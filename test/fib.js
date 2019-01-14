let chai = require('chai');
let fib = require('../utils/fib');
let expect = chai.expect;

describe("fib tests", () => {
    it("should throw an error for parameter other than integer", () => {
        expect(() => fib("1")).to.throw("Argument typeof(target) needs to be a number");
    });

    it("should return an array", () => {
        expect(Array.isArray(fib(5))).to.be.true;
    });

    it("should throw an error when patameter is 0", () => {
        expect(() => fib(0)).to.throw("Target count cannot be 0");
    });

    it("should return `[0]` when parameter is 1", () => {
        expect(fib(1)).to.eql([0]);
    });

    it("should return an array with integers in it", () => {
        fib(4).map(item => expect(typeof item === "number").to.be.true);
    });

    it("should return `[0, 1, 1, 2]` with parameter being 4", () => {
        expect(fib(4)).to.eql([0, 1, 1, 2]);
    });
});
