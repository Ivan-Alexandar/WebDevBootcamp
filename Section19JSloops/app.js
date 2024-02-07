let max = parseInt(prompt('Enter a maximum number!'));
while (!max)
{
    maximum = parseInt(prompt('Enter a valid number!'));
}
const targetNum = Math.floor(Math.random() * max) + 1; 

let guess =prompt('Enter your guess! (Type "q" to quit)');
let attempts = 1;

while (parseInt(guess) !== targetNum)
{
    if (guess === 'q') break;
    guess=parseInt(guess);
    if (guess > targetNum) {
        guess = prompt('Too high! Enter a new guess!');
    attempts++;
    }
    else if (guess < targetNum) {
        guess = prompt('Too low! Enter a new guess!');
    attempts++;
    }
    else {
        guess = prompt('Invalid guess. Enter a new guess or "q" to quit!');
    }
}

if (guess === 'q') { alert('You quit!'); }
else if (parseInt(guess) === targetNum) { alert(`Congratulations! You won! It took you ${attempts} attempts`); }

