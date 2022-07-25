//Initializations
const notA = document.getElementById('notA');
const notS = document.getElementById('notS');
const notD = document.getElementById('notD');
const notF = document.getElementById('notF');
const notJ = document.getElementById('notJ');
const notK = document.getElementById('notK');
const notL = document.getElementById('notL');
const notSem = document.getElementById('not;');
const left = document.getElementById('left');
const right = document.getElementById('right');
const bod = document.querySelector('body');
const circles = document.getElementsByClassName('btn');
const lightSwitch = document.getElementById('lightMode');
const icon = document.getElementById('moonIcon');

var lightMode = false;

//Functions
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function anima(key){
    if (!lightMode){
        key.setAttribute('style', 'background-color: #63ffa9; box-shadow: 0 0 25px #63ffa9; color: #111;');
        bod.setAttribute('style', 'box-shadow: 0 0 200px #31ffa4);')
        await sleep(275);
        key.setAttribute('style', 'background-color: transparent; box-shadow: none; color: white;');
        bod.setAttribute('style', 'box-shadow: none;');
    }

    else{
        key.setAttribute('style', 'background-color: black; box-shadow: 0 0 15px black; color: white; border-color: white;');
        await sleep(275);
        key.setAttribute('style', 'background-color: transparent; box-shadow: none; color: black; border-color: black;');
    }
    
}

function playNote(key){
    switch (key.key){
        case 'a':
            new Audio("./assets/do.wav").play();
            anima(notA);
            break;
        case 's':
            new Audio("./assets/re.wav").play();
            anima(notS);
            break;
        case 'd':
            new Audio("./assets/mi.wav").play();
            anima(notD);
            break;
        case 'f':
            new Audio("./assets/fa.wav").play();
            anima(notF);
            break;
        case 'j':
            new Audio("./assets/so.wav").play();
            anima(notJ);
            break;
        case 'k':
            new Audio("./assets/la.wav").play();
            anima(notK);
            break;
        case 'l':
            new Audio("./assets/ti.wav").play();
            anima(notL);
            break;
        case ';':
            new Audio("./assets/doOc.wav").play();
            anima(notSem);
            break;
            
    }
}

function modSwitch(){
    if (!lightMode){
        lightMode = true;
        bod.style.backgroundColor = 'white';

        lightSwitch.style.borderColor = 'black';
        for (var i = 0; i < 8; i++){
            circles[i].setAttribute('style', 'border-color: black; color: black;');
        }

        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        icon.style.color = 'black';
    }

    else{
        lightMode = false;
        bod.style.backgroundColor = '#1E2026';

        lightSwitch.style.borderColor = 'white';
        for (var i = 0; i < 8; i++){
            circles[i].setAttribute('style', 'border-color: #63ffa9; color: white;');
        }

        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        icon.style.color = 'white';
    }
}

//Event -> Calls
document.onkeydown = (e)=>{playNote(e)};
lightSwitch.addEventListener('click', ()=>{modSwitch();});