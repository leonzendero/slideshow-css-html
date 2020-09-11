let prev = document.querySelector('#gallery .buttons .prev');
let next = document.querySelector('#gallery .buttons .next');

let images = document.querySelectorAll('#gallery .photos img');
let i = 0;

prev.onclick = function (){
    images[i].className = '';
    i--;
    if (i < 0){
        i = images.length - 1;
    }
    images[i].className = 'showed';
}

next.onclick = function (){
    images[i].className = '';
    i++;

    if (i >= images.length){
        i = 0;
    }
    images[i].className = 'showed';
}