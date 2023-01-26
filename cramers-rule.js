function determinant(matrix) {
  const n = matrix.length;
  switch (n) {
    case 1:
      return matrix[0][0];
    case 2:
      return matrix[0][0]*matrix[1][1] - matrix[0][1]*matrix[1][0];
    case 3:
      const a00 = matrix[1][1]*matrix[2][2] - matrix[1][2]*matrix[2][1];
      const a01 = matrix[1][0]*matrix[2][2] - matrix[1][2]*matrix[2][0];
      const a02 = matrix[1][0]*matrix[2][1] - matrix[1][1]*matrix[2][0];
      return a00*matrix[0][0] - a01*matrix[0][1] + a02*matrix[0][2];
    default:
      // Recursive definition
      let det = 0;
      for (let i = 0; i < n; i++) {
        const reducedMatrix = matrix.reduce(
          (acc, row, j) => {
            if (i !== j) {
              const [_, ...rowCopy] = row;
              acc.push(rowCopy);
            }
            return acc
          },
          []
        )
        det += matrix[i][0]*determinant(reducedMatrix)*(i % 2 === 0 ? 1 : -1);
      }
      return det;
  }
}

function cramersRule(matrix, freeTerms) {
  // Switch to column major format
  const n = matrix.length;
  const matrixA = matrix
    .reduce(
      (acc, row) => {
        row.forEach(
          (elem, i) => acc[i].push(elem));
        return acc;
      },
      Array(n).fill().map(_ => [])
    );
  // Compute original determinant
  const detA = determinant(matrixA);
  // Compute each solution value
  const solution = [];
  for (let i = 0; i < n; i++) {
    const matrixAi = matrixA
      .map((row, j) => j === i ? freeTerms : row);
    const detAi = determinant(matrixAi);
    solution.push(detAi / detA);
  }
  return solution;
}

console.log(cramersRule([[2, -1, 5, 1], [3, 2, 2, -6], [1, 3, 3, -1], [5, -2, -3, 3]], [-3, -32, -47, 49]));