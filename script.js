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
//Functions
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function anima(key){
    key.setAttribute('style', 'background-color: #63ffa9; box-shadow: 0 0 25px #63ffa9; color: #111;');
    await sleep(275);
    key.setAttribute('style', 'background-color: transparent; box-shadow: none; color: white;');
    
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

//Event -> Calls
document.onkeydown = (e)=>{playNote(e)};