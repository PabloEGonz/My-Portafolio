const burger = document.querySelector('.menu');
const opts = document.querySelector('.option');
const close = document.querySelector('.close');

burger.onclick =() => {
    console.log(burger)
    opts.classList.add('display')
};