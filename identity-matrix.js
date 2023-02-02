function idMatrix(n) {
    // array of values [0, 1, ... n]
    const indexArr = [...Array(n).fill(0).keys()];
    // array of arrays with 1 if row and column match, else 0
    return indexArr.map(i => indexArr.map(j => i === j ? 1 : 0));
}