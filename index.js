const burger = document.querySelector('.menu');
const opts = document.querySelector('.option');
const close = document.querySelector('.close');


burger.onclick =() => {
    opts.classList.add('display')
};

close.onclick = () => {
 opts.classList.remove('display');
}