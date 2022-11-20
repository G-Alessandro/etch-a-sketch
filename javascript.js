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

//Thing about container
container.classList.add('container');
body.appendChild(container);

//ContainerRedTop
containerRedTop.classList.add('containerRedTop');
container.appendChild(containerRedTop)
//ContainerRedTop text
magic.classList.add('magic');
containerRedTop.appendChild(magic)
magic.innerText = "MAGIC";

eas.classList.add('eas');
containerRedTop.appendChild(eas);
eas.innerText = "Etch A Sketch";

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
//Thing about squareBtn32
squareBtn32.classList.add('squareBtn32');
squareBtnContainer.appendChild(squareBtn32);
//Thing about squareBtn64
squareBtn64.classList.add('squareBtn64');
squareBtnContainer.appendChild(squareBtn64);

//Function to change the number of columns and rows
function startingDiv (numDiv) {
    containerRed.style.setProperty('--grid-columns',numDiv);
    containerRed.style.setProperty('--grid-rows', numDiv);
    for (let i = 0 ; i < ( numDiv * numDiv ); i++) {
        let square = document.createElement('div');
        square.classList.add('square')
        containerRed.appendChild(square);
        square.addEventListener('mouseover',function (e) {
            e.target.style.backgroundColor = 'black';
        })
    }
}

startingDiv (16)

squareBtn16.addEventListener('click', startingDiv(20));

squareBtn32.addEventListener('click', startingDiv(32));

squareBtn64.addEventListener('click', startingDiv(64));



