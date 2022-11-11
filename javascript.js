const body = document.querySelector('body');
const container = document.createElement('div')
const container2 = document.createElement('div')
const containerRed = document.createElement('div');
const containerRedTop = document.createElement('div');
const divImp = document.createElement('input');
const impBtn = document.createElement('button');
let magic = "MAGIC";
let screen = "SCREEN";
let eas = "Etch A Sketch";

//Thing about container
container.classList.add('container');
body.appendChild(container);

//ContainerRedTop
containerRedTop.classList.add('containerRedTop');
container.appendChild(containerRedTop)
containerRedTop.innerText = (magic+" "+eas+" "+screen);


//Thing about containerRed
 containerRed.classList.add('containerRed');
 container.appendChild(containerRed);

//Thing about container2
container2.classList.add('container2');
containerRed.appendChild(container2);

//Thing about divImp
divImp.classList.add('divImp');
body.appendChild(divImp);

//Thing about impBtn
impBtn.classList.add('impBtn');
body.appendChild(impBtn);

//Function to change the number of columns and rows
function startingDiv (numDiv) {
    container2.style.setProperty('--grid-columns',numDiv);
    container2.style.setProperty('--grid-rows', numDiv);
    for (let i = 0 ; i < ( numDiv * numDiv ); i++) {
        let square = document.createElement('div');
        square.classList.add('square')
        container2.appendChild(square);
        square.addEventListener('mouseover',function (e) {
            e.target.style.backgroundColor = 'black';
        })
    }
}

startingDiv (16)
