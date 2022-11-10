const body = document.querySelector('body');
const container = document.createElement('div')
const containerRed = document.createElement('div');
const divImp = document.createElement('input');
const impBtn = document.createElement('button');

//Thing about container
container.classList.add('container');
body.appendChild(container);

//Thing about containerRed
 containerRed.classList.add('containerRed');
 container.appendChild(containerRed)

//Thing about divImp
divImp.classList.add('divImp');
body.appendChild(divImp);

//Thing about impBtn
impBtn.classList.add('impBtn');
body.appendChild(impBtn);

function startingDiv (numDiv) {
    for (let i = 0 ; i < ( numDiv * numDiv ); i++) {
        let square = document.createElement('div');
        square.classList.add('square')
        containerRed.appendChild(square);
        square.innerText = i+1;
    }
}

startingDiv (16)
