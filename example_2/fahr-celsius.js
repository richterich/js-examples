/**
  * prints Fahrenheit-Celsius table
  * for fahr = 0, 20, ..., 300; floating-point version
  */
let fahr, celsius;
let lower, upper, step;

lower = 0;    // lower limit of temperature table
upper = 300;  // upper limit
step = 20;    // step size

console.log('Fahr\tCelsius');
console.log('----\t-------');

fahr = lower;
while (fahr <= upper) {
  celsius = (5.0 / 9.0) * (fahr - 32.0);
  console.log('%s\t%s', fahr.toFixed(), celsius.toFixed(1));
  fahr = fahr + step;
}
