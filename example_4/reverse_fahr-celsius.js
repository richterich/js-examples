/**
 * prints Fahrenheit-Celsius reverse table
 * for fahr = 0, 20, ..., 300; floating-point version
 */
let fahr;

console.log('Fahr\tCelsius');
console.log('----\t-------');

for (fahr = 300; fahr >= 0; fahr = fahr - 20) {
    console.log(`${fahr}\t${((5.0 / 9.0) * (fahr - 32.0)).toFixed(1)}`);
}
