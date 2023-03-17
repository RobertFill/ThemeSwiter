let buttonSwitch = document.querySelector('.ball'); //class//
let pageWhite = document.querySelector('body');
let container = document.querySelector('.container');
let bodyWhite = document.querySelector('html');

buttonSwitch.onclick = e =>{
    if(!container.classList.contains('light')){
        container.classList.add('light');
    }else{
        container.classList.remove('light');
    }
    if(!bodyWhite.classList.contains('light')){
        bodyWhite.classList.add('light');
    }else{
        bodyWhite.classList.remove('light');
    }
}