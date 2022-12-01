const body = document.querySelector('body');
const container = document.createElement('div')
const containerRed = document.createElement('div');
const containerRedTop = document.createElement('div');
const magic = document.createElement('div');
const screen = document.createElement('div');
const eas = document.createElement('div');
const containerRedBottom = document.createElement('div');
const squareBtnContainer = document.createElement('div');
const squareBtn16 = document.createElement('button');
const squareBtn32 = document.createElement('button');
const squareBtn64 = document.createElement('button');
const colorBtnContainer = document.createElement('div');
const blackBtn = document.createElement('button');
const shadeBtn = document.createElement('button');
const randomRgbBtn = document.createElement('button');
const eraserBtn = document.createElement('button'); 
const resetBtn = document.createElement('button');
let eraserColor = "rgb(" + 202 + "," + 196 + "," + 196 +")";
let squareColor = "black";

//Thing about container
container.classList.add('container');
body.appendChild(container);

//ContainerRedTop
containerRedTop.classList.add('containerRedTop');
container.appendChild(containerRedTop)
//ContainerRedTop text
//MAGIC
magic.classList.add('magic');
containerRedTop.appendChild(magic)
magic.innerText = "MAGIC";
//Etch A Sketch
eas.classList.add('eas');
containerRedTop.appendChild(eas);
eas.innerText = "Etch A Sketch";
//SCREEN
screen.classList.add('screen');
containerRedTop.appendChild(screen);
screen.innerText = "SCREEN";

//Thing about containerRed
containerRed.classList.add('containerRed');
container.appendChild(containerRed);

//Thing about containerRedBottom
containerRedBottom.classList.add('containerRedBottom');
container.appendChild(containerRedBottom);
//Thing about squareBtnContainer 
squareBtnContainer.classList.add('squareBtnContainer');
containerRedBottom.appendChild(squareBtnContainer);
//Thing about squareBtn16
squareBtn16.classList.add('squareBtn16');
squareBtnContainer.appendChild(squareBtn16);
squareBtn16.innerText = "16 X 16";
//Thing about squareBtn32
squareBtn32.classList.add('squareBtn32');
squareBtnContainer.appendChild(squareBtn32);
squareBtn32.innerText = "32 X 32";
//Thing about squareBtn64
squareBtn64.classList.add('squareBtn64');
squareBtnContainer.appendChild(squareBtn64);
squareBtn64.innerText = "64 X 64";
//Thing about colorBtnContainer
colorBtnContainer.classList.add('colorBtnContainer');
containerRedBottom.appendChild(colorBtnContainer);
//Thing about blackBtn
blackBtn.classList.add('blackBtn');
colorBtnContainer.appendChild(blackBtn);
blackBtn.innerText = "BLACK";
//Thing about shadeBtn
shadeBtn.classList.add('shadeBtn');
colorBtnContainer.appendChild(shadeBtn);
shadeBtn.innerText = "SHADE";
//Thing about randomRbgBtm
randomRgbBtn.classList.add('randomRgbBtm');
colorBtnContainer.appendChild(randomRgbBtn);
randomRgbBtn.innerText = "COLOR";
//Thing about eraserBtm
eraserBtn.classList.add('eraserBtm');
colorBtnContainer.appendChild(eraserBtn);
eraserBtn.innerText = "ERASER";
//Thing about resetBtm
resetBtn.classList.add('resetBtn');
colorBtnContainer.appendChild(resetBtn);
resetBtn.innerText = "RESET";

//Reset function
function reset () {
    let squares = containerRed.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = eraserColor )
}

//Square delete function
function squaresDelete () {
    let squares = containerRed.querySelectorAll('div');
    squares.forEach((div) => div.remove());
};

//Shade function
function shade () {
    let r = 202 ;
    let g = 196 ;
    let b = 196 ;
    r -= (r*10)/100 ;
    g -= (g*10)/100 ;
    b -= (b*10)/100 ;
    return "rgb(" + r + "," + g + "," + b +")";
};

//Random color function
function randomRgb () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
};

//Function to change the number of columns and rows
function startingDiv (numDiv) {
    containerRed.style.setProperty('--grid-columns',numDiv);
    containerRed.style.setProperty('--grid-rows', numDiv);
    for (let i = 0 ; i < ( numDiv * numDiv ); i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        containerRed.appendChild(square);
        square.addEventListener('mouseover',function (e) {
            if ( squareColor === "random" ){
                e.target.style.backgroundColor = randomRgb();
            }
            if ( squareColor === "shade") {
                e.target.style.backgroundColor = shade ();
            }
            else {
                e.target.style.backgroundColor = squareColor;
            }
        })
    }
};

startingDiv (16);

squareBtn16.addEventListener('click', function() {
    squaresDelete();
    startingDiv (16);
});

squareBtn32.addEventListener('click', function() {
    squaresDelete();
    startingDiv (32);
});

squareBtn64.addEventListener('click', function() {
    squaresDelete()
    startingDiv (64);
});

blackBtn.addEventListener('click', function(){
    squareColor = "black";
})

shadeBtn.addEventListener('click', function (){
    squareColor = "shade";
})

eraserBtn.addEventListener('click',function () {
    squareColor = eraserColor
});

randomRgbBtn.addEventListener('click', function() {
    squareColor = "random";
});

resetBtn.addEventListener('click',function(){
    reset ()
});