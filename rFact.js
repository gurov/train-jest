function rFact(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * rFact(n - 1); 
    }
}
module.exports = rFact;