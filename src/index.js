const fs = require('fs')
const { getRandomWordSync, getRandomWord } = require('word-maker');

console.log('It works!');

// Write contents to file
const stream = fs.createWriteStream('./dataPrint.txt', { flags: 'a' });

// Get Fizz, Buzz, FizzBuzz word
const getFizzBuzzWord = (index, callback, withErrors) => {
    let fizzBuzzWord;
    if ((index % 3 === 0) && (index % 5 === 0)) {
        fizzBuzzWord = 'FizzBuzz';
    } else if (index % 3 === 0) {
        fizzBuzzWord = 'Fizz';
    } else if (index % 5 === 0) {
        fizzBuzzWord = 'Buzz';
    } else {
        fizzBuzzWord = callback({ withErrors });
    }

    return fizzBuzzWord;
};


// Task 1 printing random words --- printNumbers()
// You can pass the withErrors == true argument to check the  error handling here ex : printNumbers(true)
const printNumbers = (withErrors = false) => {
    stream.write('--------- Question 1  ----------------\n');
    for (let i = 1; i < 101; i += 1) {
        let word;
        try {
            word = getRandomWordSync({ withErrors });
        } catch (err) {
            word = 'It shouldn\'t break anything!';
        }
        stream.write(`${i} : ${word}\n`);
    }
};


// Task 2 Fizz Buzz Programme
// You can pass the withErrors == true argument to check the  error handling here ex : fizzBuzz(true)
const fizzBuzz = (withErrors = false) => {
    stream.write('--------- Question 2  ----------------\n');
    for (let i = 1; i < 101; i += 1) {
        let word;
        try {
            word = getFizzBuzzWord(i, getRandomWordSync, withErrors);
        } catch (err) {
            word = 'It shouldn\'t break anything!';
        }

        stream.write(`${i} : ${word}\n`);
    }
};

// Task 03 (I)- print numbers with async function
// You can pass the withErrors == true argument to check the  error handling here ex : asyncRandomWordPrint(true)
const asyncRandomWordPrint = async withErrors => {
    stream.write('--------- Question 3 (I) -   print numbers with getRandomWord ----------------\n');
    for (let i = 1; i < 101; i += 1) {
        let word;
        try {
            word = await getRandomWord({ withErrors });
        } catch (err) {
            word = 'It shouldn\'t break anything!';
        }

        stream.write(`${i} : ${word}\n`);
    }
};

// Task 03 (II)- Fizz Buzz with async function
// You can pass the withErrors == true argument to check the  error handling here ex : asyncFizzBuzz(true)
const asyncFizzBuzz = async withErrors => {
    stream.write('--------- Question 3 (II) -   Fizz Buzz with getRandomWord ----------------\n');
    for (let i = 1; i < 101; i += 1) {
        let word;
        try {
            word = await getFizzBuzzWord(i, getRandomWord, withErrors);
        } catch (err) {
            word = 'It shouldn\'t break anything!';
        }

        stream.write(`${i} : ${word}\n`);
    }
};


// bonus task - get random word implementation with slow == true, call asyncRandomWordPrintBonus() or asyncRandomWordPrintBonus(true)
const asyncRandomWordPrintBonus = async (withErrors = false) => {
    stream.write('--------- Bonus task - getRandomWord implementation with slow option = true----------------\n');
    const promises = [];

    for (let i = 1; i < 101; i += 1) {
        promises.push(getRandomWord({ slow: true, withErrors }));
    }

    const results = await Promise.all(promises.map(p => p.then(() => p).catch(() => 'It shouldn\'t break anything!')));

    for (let i = 0; i < results.length; i += 1){
        stream.write(`${i + 1} : ${results[i]}\n`);
    }
};

const main = async () => {
    printNumbers(true);
    fizzBuzz(true);
    await asyncRandomWordPrint(true)
    await asyncFizzBuzz(true)
    await asyncRandomWordPrintBonus(true)

    stream.end();
};


main();
