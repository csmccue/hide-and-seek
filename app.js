/* eslint-disable no-console */
// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');
const restartButton = document.getElementById('restart-button');
const normalButton = document.getElementById('normal-button');
const impossibleButton = document.getElementById('impossible-button');

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
let impossibleMode = 0;

shedButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    let answer = hidingPlaces[hidingSpot];
    console.log(answer);
    if (impossibleMode === 0){
        handleGuess(answer, 'shed');
    } else {
        if (answer === 'shed'){
            answer = 'boulder';
        } else {
            handleGuess(answer, 'shed'); 
        }
    }
});

treeButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    let answer = hidingPlaces[hidingSpot];
    if (impossibleMode === 0){
        handleGuess(answer, 'tree');
    } else {
        if (answer === 'tree'){
            answer = 'shed';
        } else {
            handleGuess(answer, 'tree'); 
        }
    }
});

boulderButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    let answer = hidingPlaces[hidingSpot];
    if (impossibleMode === 0){
        handleGuess(answer, 'boulder');
    } else {
        if (answer === 'boulder'){
            answer = 'tree';
        } else {
            handleGuess(answer, 'boulder'); 
        }
    }
});

restartButton.addEventListener('click', () => {
    console.log('look what you did');    
    correctGuesses = 0;
    winsEl.textContent = correctGuesses;
    console.log(correctGuesses);
    wrongGuesses = 0;
    lossesEl.textContent = wrongGuesses;
    console.log(wrongGuesses);
    totalGuesses = 0;
    console.log(totalGuesses);
    totalEl.textContent = totalGuesses;
    perCent.textContent = 0;
    //restart styles
    shedContainer.classList.remove('face');
    treeContainer.classList.remove('face');
    boulderContainer.classList.remove('face');    
});

impossibleButton.addEventListener('click', () => {
    console.log('IMPOSSIBLE');    
    impossibleMode = 1;
    impossibleButton.style['background-color'] = 'red';
    treeButton.style['background-color'] = 'red';
    boulderButton.style['background-color'] = 'red';
    shedButton.style['background-color'] = 'red';
});
normalButton.addEventListener('click', () => {
    console.log('KEEP VANCOUVER NORMAL');    
    impossibleMode = 0;
    impossibleButton.style['background-color'] = null;
    treeButton.style['background-color'] = null;
    boulderButton.style['background-color'] = null;
    shedButton.style['background-color'] = null;
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

/*
drop down menu for chilis option - DID NOT WORK :(
const selectElem = document.getElementById('select');
const pElem = document.getElementById('p');

selectElem.addEventListener('change', function() {
    const index = selectElem.selectedIndex;
    pElem.textContent = `selectedIndex: ${index}`;
    console.log(pElem.textContent);
    if (pElem.textContent === 'selectedIndex: 1') {
        document.getElementById('boulder-container').src = './assets/newchili.PNG';
        document.getElementById('tree-container').src = './assets/newchili.PNG';
        document.getElementById('shed-container').src = './assets/newchili.PNG';
    } 
} 
);
*/