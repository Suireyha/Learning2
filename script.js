//Initializations
const first = document.getElementById('firstBtn');
const uni = document.getElementById('universal');
const wordArr = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
let red = 204;
let blue = 80;
let green = 80;
let wordCounter = 0;
let colCount = 0;

//Functions
function generateBtn(){
    let newB = document.createElement('button');
    newB.setAttribute('class', 'btn');
    newB.style.backgroundColor = 
    "rgb(" + (+red) + "," + (+green) + "," + (+blue) +")";
    newB.textContent = wordArr[wordCounter];
    uni.appendChild(newB);

    //Spectrum cycle maths
    switch (colCount)
    {
        case 0:
            green += 20;
            break;
        case 1:
            red += -20;
            break;
        case 2:
            blue += 20;
            break;
        case 3:
            green -= 20;
            break;
        case 4:
            red += 20;
            break;
        case 5:
            blue -= 20;
            break;
        default:
            colCount = 0;
            red = 200;
            green = 80;
            blue = 80;
            break;
    }

    //Every 6 iterations, change col direction
    if (wordCounter%6 == 0){
        colCount++;
    }


    wordCounter++;
}

//Event -> Calls
first.addEventListener('click', ()=>{generateBtn();});