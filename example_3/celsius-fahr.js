/**
  * prints Celsius-Fahrenheit table
  * for fahr = 0, 20, ..., 300; floating-point version
  */
let fahr, celsius;
let lower, upper, step;

lower = 0;    // lower limit of temperature table
upper = 300;  // upper limit
step = 20;    // step size

console.log('Celsius\tFahr');
console.log('-------\t----');

celsius = lower;
while (celsius <= upper) {
  fahr = celsius * (9.0 / 5.0) + 32.0;
  console.log('%s\t%s', celsius.toFixed(1), fahr.toFixed())
  celsius = celsius + step;
}
