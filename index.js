const burger = document.querySelector('.menu');
const opts = document.querySelector('.option');
const close = document.getElementsByClassName('close');
const body = document.querySelector('.body');

burger.onclick = () => {
  opts.classList.add('display');
  body.classList.add('overflow');
};

for (let i = 0; i < close.length; i += 1) {
  close[i].onclick = () => {
    opts.classList.remove('display');
    body.classList.remove('overflow');
  };
}
