/*

//STATEMENT:

This task is a variation of the short story by Arthur C. Clarke.
(Solvers should be aware of the consequences of completing this task.)
In detail, to specify what is meant by a "name":

The integer 1 has 1 name "1".
The integer 2 has 2 names "1+1" and "2".
The integer 3 has 3 names "1+1+1", "2+1", and "3".
The integer 4 has 5 names "1+1+1+1", "2+1+1", "2+2", "3+1", "4".
The integer 5 has 7 names "1+1+1+1+1", "2+1+1+1", "2+2+1", "3+1+1", "3+2", "4+1", "5".
This can be visualized in the following form:

          1
        1   1
      1   1   1
    1   2   1   1
  1   2   2   1   1
1   3   3   2   1   1
Where row  n
  corresponds to integer  n
 , and each column  C
  in row  m
  from left to right corresponds to the number of names beginning with  C
 .

Optionally note that the sum of the  n
 -th row  P(n)
  is the integer partition function.

//REQUIREMENT:

Implement a function that returns the sum of the  n-th row.*/

function numberOfNames(num) {
  // Array of integer partition function values
  const p_n = Array(num + 1).fill(0);
  p_n[0] = 1;
  p_n[1] = 1;
  p_n[2] = 2;
  // Fill with recurrence relation
  // P(n) = Sum_k=1:n (-1)^(k+1)*(P(n-k(3k-1)/2) + P(n-k(3k+1)/2))
  for (let n = 3; n <= num; n++) {
    for (let k = 1; k <= n; k++) {
      const d = n - k*(3*k - 1)/2;
      if (d >= 0) {
        p_n[n] += (-1)**(k + 1)*p_n[d];
      } else {
        break;
      }
      if (d - k >= 0) {
        p_n[n] += (-1)**(k + 1)*p_n[d - k];
      } else {
        break;
      }
    }
  }
  return p_n[num];
}
