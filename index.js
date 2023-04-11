const burger = document.querySelector('.menu');
const opts = document.querySelector('.option');
const close = document.getElementsByClassName('close');

burger.onclick = () => {
  opts.classList.add('display');
};

for (let i = 0; i < close.length; i += 1) {
  close[i].onclick = () => {
    opts.classList.remove('display');
  };
}
