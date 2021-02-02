 const fib = (target, col = [0, 1]) => {
    if (typeof target !== "number") {
        throw new Error("Argument typeof(target) needs to be a number");
    }

    if (target === 0) {
        throw new Error("Target count cannot be 0");
    }

    if (target === 1) {
        return [0];
    }

    if (col.length === target) {
        return col;
    }

    let collectionLength = col.length;
    let n1 = col[collectionLength - 2];
    let n2 = col[collectionLength - 1];
    let addition = n1 + n2;
    let newCollection = [...col, addition];

    return fib(target, newCollection);
};

 module.exports = fib;