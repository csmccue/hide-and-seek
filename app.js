// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');

const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');
const perCent = document.getElementById('percent');

// initialize state
const hidingPlaces = ['tree', 'shed', 'boulder'];

let correctGuesses = 0;
let totalGuesses = 0;
let wrongGuesses = 0;

shedButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'shed');
});

treeButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'tree');
});

boulderButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'boulder');
});

function handleGuess(correctSpot, userGuess) {
    console.log(correctSpot);
    console.log(userGuess);
    // then increment the guesses
    totalGuesses++;
    if (correctSpot === userGuess) {
        console.log('correct');
        correctGuesses++;
    } else {
        console.log('wrong');
    }

    // count your losses
    wrongGuesses = totalGuesses - correctGuesses;
    // output
    lossesEl.textContent = wrongGuesses;
    winsEl.textContent = correctGuesses;
    totalEl.textContent = totalGuesses;
    perCent.textContent = Math.ceil(100 * correctGuesses / totalGuesses);
    // reset the styles
    shedContainer.classList.remove('face');
    treeContainer.classList.remove('face');
    boulderContainer.classList.remove('face');
    // then grab the appropriate container element for the correct guess from the DOM
    let newEl = `${correctSpot}-container`;
    console.log(newEl);
    // then add the face class to that element so that the face shows up
    if (newEl === 'shed-container') {
        shedContainer.classList.add('face');
    }     
    if (newEl === 'tree-container') {
        treeContainer.classList.add('face');
    }   
    if (newEl === 'boulder-container') {
        boulderContainer.classList.add('face');
    }
}
//code works for each container
  //  shedContainer.classList.add('face');
  //  treeContainer.classList.add('face');
 //   boulderContainer.classList.add('face');



//var dummy = allContainer[correctSpot];
    //dummy.classList.add('face');
    //   resultsEl.textContent = `You guessed correctly ${correctGuesses} time(s) and incorrectly ${incorrectGuesses} time(s).`;

    
    // then if the user guess is correct, increment the correct guesses
    
 //update the DOM to show this change to the user (including the losses, not tracked directly in state)
