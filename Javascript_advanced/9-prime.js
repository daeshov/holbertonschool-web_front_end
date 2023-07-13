function countPrimeNumbers() {

  let count = 0;

  for (var num = 2; num <= 100; num++) {
    var isPrime = true;

    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      count++;
    }
  }
  const time = performance.now();
  console.log("Execution time of printing countPrimeNumbers was " + executionTime + " milliseconds.");

  return count;
}

console.log(countPrimeNumbers());
