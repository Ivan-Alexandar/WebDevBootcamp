// let max = parseInt(prompt('Enter a maximum number!'));
// while (!max)
// {
//     maximum = parseInt(prompt('Enter a valid number!'));
// }
// const targetNum = Math.floor(Math.random() * max) + 1;

// let guess =prompt('Enter your guess! (Type "q" to quit)');
// let attempts = 1;

// while (parseInt(guess) !== targetNum)
// {
//     if (guess === 'q') break;
//     guess=parseInt(guess);
//     if (guess > targetNum) {
//         guess = prompt('Too high! Enter a new guess!');
//     attempts++;
//     }
//     else if (guess < targetNum) {
//         guess = prompt('Too low! Enter a new guess!');
//     attempts++;
//     }
//     else {
//         guess = prompt('Invalid guess. Enter a new guess or "q" to quit!');
//     }
// }

// if (guess === 'q') { alert('You quit!'); }
// else if (parseInt(guess) === targetNum) { alert(`Congratulations! You won! It took you ${attempts} attempts`); }


// const nameList = ['adrian', 'as','christian','mohammad','abdul','allah','john','steve','anya','ivan'];

// for(let name of nameList)
// {
//     console.log(name);
// }



//         Todo list

const todoList = [];

let question = false;

while (!question) {
    question = prompt('What would you like to do?');
    
    if (question === 'new') {
        let newItem = prompt('Enter your item.');
        todoList.push(newItem);
    }
    else if (question === 'list') {
        console.log('********TODO LIST********')
        for (let item of todoList) {
            console.log(todoList.indexOf(item)+1 + ': ' + item);
        }
        console.log('*************************')
    }
    else if (question === 'delete') {
        let deleteIndex = parseInt(prompt('Enter the number of the item you want to delete!'));
        if(!Number.isNaN(deleteIndex)) {
        
            todoList.splice(deleteIndex -1, 1);
        }
        else
        {
            alert('Please enter a valid number!');
        }
    }
    else if (question === 'quit') {
        alert('You quit!');
        break;
    }
    else {
        
        alert('Please enter a valid command!');
    }
    question = false;
}
