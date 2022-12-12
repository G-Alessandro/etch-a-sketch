const body = document.querySelector('body');
const container = document.createElement('div')
const containerRed = document.createElement('div');
const containerRedTop = document.createElement('div');
const containerRedTopText = document.createElement('div');
const containerRedTopShadow = document.createElement('div');
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
let squareColor = "black";

//Thing about container
container.classList.add('container');
body.appendChild(container);

//ContainerRedTop
containerRedTop.classList.add('containerRedTop');
container.appendChild(containerRedTop)
//ContainerRedTopText
containerRedTopText.classList.add('containerRedTopText');
containerRedTop.appendChild(containerRedTopText)
//MAGIC
magic.classList.add('magic');
containerRedTopText.appendChild(magic)
magic.innerText = "MAGIC";
//Etch A Sketch
eas.classList.add('eas');
containerRedTopText.appendChild(eas);
eas.innerText = "Etch A Sketch";
//SCREEN
screen.classList.add('screen');
containerRedTopText.appendChild(screen);
screen.innerText = "SCREEN";

//Thing about containerRedTopShadow
containerRedTopShadow.classList.add('containerRedTopShadow');
containerRedTop.appendChild(containerRedTopShadow);

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
    squares.forEach((div) => div.style.backgroundColor = "rgb(202, 196, 196)");
    squares.forEach((div) => div.style.opacity = 1.0);
}

//Square delete function
function squaresDelete () {
    let squares = containerRed.querySelectorAll('div');
    squares.forEach((div) => div.remove());
};

//Black function
function black (e) {
    e.target.style.opacity = 1;
    e.target.style.backgroundColor = "rgb(0, 0, 0)";
}

//Shade function
function shade (e) {
    const currentOpacity = Number(e.target.style.opacity);
    e.target.style.backgroundColor = 'black';
    if ( currentOpacity != 1.0 ) {
        e.target.style.opacity = Number(currentOpacity) + .1;
    }
    else {
        e.target.style.opacity = .1;
    }
};

//Random color function
function randomRgb (e) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    e.target.style.opacity = 1;
    e.target.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
};

//Eraser function
function eraser (e) {
    e.target.style.opacity = 1;
    e.target.style.backgroundColor = "rgb(202, 196, 196)";

}

//Function to change the number of columns and rows
function gridSize (numDiv) {
    containerRed.style.setProperty('--grid-columns',numDiv);
    containerRed.style.setProperty('--grid-rows', numDiv);
    for (let i = 0 ; i < ( numDiv * numDiv ); i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        containerRed.appendChild(square);
        square.addEventListener('mouseover',function (e) {
            if ( squareColor === "black" ) {
                black (e)
            }
            if ( squareColor === "shade") {
                shade (e)
            }
            if ( squareColor === "random" ){
                randomRgb (e)
            }
            if ( squareColor === "eraserColor") {
                eraser (e)
            }
            else {
                e.target.style.backgroundColor = squareColor;
            }
        })
    }
};

gridSize (16);

squareBtn16.addEventListener('click', function() {
    squaresDelete();
    gridSize (16);
    squareColor = "black";
});

squareBtn32.addEventListener('click', function() {
    squaresDelete();
    gridSize (32);
    squareColor = "black";
});

squareBtn64.addEventListener('click', function() {
    squaresDelete()
    gridSize (64);
    squareColor = "black";
});

blackBtn.addEventListener('click', function(){
    squareColor = "black";
})

shadeBtn.addEventListener('click', function (){
    squareColor = "shade";
})

eraserBtn.addEventListener('click',function () {
    squareColor = "eraserColor";
});

randomRgbBtn.addEventListener('click', function() {
    squareColor = "random";
});

resetBtn.addEventListener('click',function(){
    reset ();
    squareColor = "black";
});