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

// pop up window

const popupBtn = document.getElementsByClassName('popup-button');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.close-popup');


for (let j = 0; j < popupBtn.length; j += 1) {
  popupBtn[j].onclick = () => {
    popup.classList.add('openpopup');
  };
}

closePopup.onclick = () => {
  popup.classList.remove('openpopup');
  };