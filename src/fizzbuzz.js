// Alexandra: This is where you'll write your fizzbuzz function!
// 
// Your mission:
// 1. Look at the test in test/fizzbuzz.test.js
// 2. Figure out what the test expects
// 3. Write the simplest code to make it pass
// 4. Run `npm test` to see if it works
//
// Remember: Start simple, you can always improve it later!

// Write your fizzbuzz function here

function fizzbuzz(nombre)
{
    if ((nombre % 3 == 0) && (nombre % 5 == 0)) return 'FizzBuzz';
    if (nombre % 3 == 0)    return 'Fizz';
    if (nombre % 5 == 0)    return 'Buzz';
    
    return nombre.toString();
}

// Don't forget to export your function so the tests can use it!
module.exports = fizzbuzz;

