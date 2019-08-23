
function sum(fromN, toN) {
  if (fromN === toN) {
    return toN
  }

  return fromN + sum(fromN + 1, toN)

}

//module.exports = sum;
console.log(sum(3, 7));

/*

sum (3, 7) = 3 + 4 + 5 + 6 + 7
sum (4, 7) = 4 + 5 + 6 + 7
sum (5, 7) = 5 + 6 + 7
sum (6, 7) = 6 + 7
sum (7, 7) = 7

sum (n, N) = N
sum (n-1, N) = (n-1) + N
sum ()

*/