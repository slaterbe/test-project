const { sum } = require('./sum');

const mathFunction = a => {
    return sum(a, 5);
}

module.exports = {
    mathFunction
}