const sum = (a, b) => {
    return a + b;
}

const mathFunction = a => {
    sum(a, 5);
}

module.exports = {
    sum,
    mathFunction
};