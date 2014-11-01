
/* Generate the Nth Fibonacci number */
// 1 1 2 3 5 8 13...
// Fn = Fn-1 + Fn-2

function fibonacci(n) {
    if(n === 0)
      return 0;
    else if(n === 1)
      return 1;
    else
      return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(7));
