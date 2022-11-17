const body = document.querySelector('body');
const container = document.createElement('div')
const containerRed = document.createElement('div');
const containerRedTop = document.createElement('div');
const divImp = document.createElement('input');
const impBtn = document.createElement('button');
const magic = document.createElement('div');
const screen = document.createElement('div');
const eas = document.createElement('div');
const containerRedBottom = document.createElement('div');

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

//Thing about divImp
divImp.classList.add('divImp');
body.appendChild(divImp);

//Thing about impBtn
impBtn.classList.add('impBtn');
body.appendChild(impBtn);

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

startingDiv (100)