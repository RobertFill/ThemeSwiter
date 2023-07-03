let buttonSwitch = document.querySelector('.ball'); //class//
let pageWhite = document.querySelector('body');
let container = document.querySelector('.container');

buttonSwitch.onclick = e => { //arrow function

    if (!container.classList.contains('light')) { 
        container.classList.add('light');
        document.body.style.background = '#292C35'
        
    } else {
        container.classList.remove('light');
        document.body.style.background = '#f39c12'
    }
}