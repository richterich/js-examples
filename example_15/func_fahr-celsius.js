/**
 * prints Fahrenheit-Celsius table
 * for fahr = 0, 20, ..., 300; function call
 */
console.log('Fahr\tCelsius');
console.log('----\t-------');

for (let fahr = 300; fahr >= 0; fahr = fahr - 20) {
    console.log(`${fahr}\t${fahr2celsius(fahr).toFixed(1)}`);
}

function fahr2celsius(fahrenheit) {
    return (5.0 * (fahrenheit - 32.0)) / 9.0;
}
