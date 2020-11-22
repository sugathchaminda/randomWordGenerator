Harver JS Exercise
============================

## Get started

Set this repository up by running:

```
yarn install
```

To Start the application
```
yarn start
```
## Tasks

1. Print numbers from 1 to 100 to the console, but for each number also print a random word using the function `getRandomWordSync`. E.g.
Answer
printNumbers() function in the src/index.js   


2. Modify your code to be a "Fizz Buzz" program. That is, print the numbers as in the previous step, but
for multiples of three, print "Fizz" (instead of the random word), for multiples of five, print "Buzz" and
for numbers which are both multiples of three and five, print "FizzBuzz".
Answer
fizzBuzz() function in the src/index.js  



3. Create a version of steps *1* and *2* using the **asynchronous** function, `getRandomWord`. This function
returns a Promise, which resolves to a random word string.
Answer
I - asyncRandomWordPrint() function in the src/index.js  
II - asyncFizzBuzz() function in the src/index.js  


4. Add error handling to both the synchronous and asynchronous solutions (calling `getRandomWord({ withErrors: true })` will intermitently throw an error instead of returning a random word). When an error is caught, the programm should print "It shouldn't break anything!" instead of the random word, "Fizz", "Buzz" or "FizzBuzz"
Answer
* To achieve this each function you can pass the true as argument in any function
* printNumbers(true) will call the `{ withErrors: true }`
* fizzBuzz(true) will call the `{ withErrors: true }`
* asyncRandomWordPrint(true) will call the `{ withErrors: true }`
* asyncFizzBuzz(true) will call the `{ withErrors: true }`



5. For:
 * **Node developers**: Instead of printing the console. Write the information to a file in the root of this project.
 * **Frontend developers**, send your result to an HTTP endpoint (since there is no running endpoint, this
part of your solution does not need to actually run)

**Bonus:**
The numbers should be printed in ascending order.
Imagine getRandomWord's implementation is slow and takes 500ms to complete (call getRandomWord({ slow: true }) to emulate this). Can you make your solution run in less than 1000ms with the slow option turned on?
Answer
asyncRandomWordPrintBonus() function in the src/index.js 
asyncRandomWordPrintBonus(true) will call the `{ withErrors: true }`
