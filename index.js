const projects = [{
  name: 'Project 1',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat scelerisque. Sed felis eget velit aliquet sagittis id consectetur purus. Sodales neque sodales ut etiam sit.',
  image: 'images/popup-image.png',
  techs: ['HTML', 'Bootstrap', 'Ruby'],
  live: '#',
  repo: '#',
},
{
  name: 'Project 2',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat scelerisque. Sed felis eget velit aliquet sagittis id consectetur purus. Sodales neque sodales ut etiam sit.',
  image: 'images/popup-image.png',
  techs: ['HTML', 'Css', 'Bootstrap'],
  live: '#',
  repo: '#',
},
{
  name: 'Project 3',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat scelerisque. Sed felis eget velit aliquet sagittis id consectetur purus. Sodales neque sodales ut etiam sit.',
  image: 'images/popup-image.png',
  techs: ['HTML', 'Bootstrap', 'Ruby'],
  live: '#',
  repo: '#',
},
{
  name: 'Project 4',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat scelerisque. Sed felis eget velit aliquet sagittis id consectetur purus. Sodales neque sodales ut etiam sit.',
  image: 'images/popup-image.png',
  techs: ['HTML', 'Bootstrap', 'Ruby'],
  live: '#',
  repo: '#',
},
{
  name: 'Project 5',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat scelerisque. Sed felis eget velit aliquet sagittis id consectetur purus. Sodales neque sodales ut etiam sit.',
  image: 'images/popup-image.png',
  techs: ['HTML', 'Bootstrap', 'Ruby'],
  live: '#',
  repo: '#',
},
{
  name: 'Project 6',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat scelerisque. Sed felis eget velit aliquet sagittis id consectetur purus. Sodales neque sodales ut etiam sit.',
  image: 'images/popup-image.png',
  techs: ['HTML', 'Css', 'Bootstrap', 'Ruby'],
  live: '#',
  repo: '#',
},
{
  name: 'Project 7',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat scelerisque. Sed felis eget velit aliquet sagittis id consectetur purus. Sodales neque sodales ut etiam sit.',
  image: 'images/popup-image.png',
  techs: ['HTML', 'Bootstrap', 'Ruby'],
  live: '#',
  repo: '#',
},
];

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
const popup = document.querySelector('.popup-container');
const closePopup = document.querySelector('.close-popup');

const nameH = document.querySelector('#name');
const techsLi = document.getElementsByClassName('techs');
const imageImg = document.querySelector('#image');
const description = document.querySelector('#description');
const live = document.querySelector('#live');
const repo = document.querySelector('#repo');

for (let j = 0; j < popupBtn.length; j += 1) {
  popupBtn[j].onclick = () => {
    popup.classList.add('openpopup');

    nameH.innerHTML = projects[j].name;
    imageImg.src = projects[j].image;
    description.innerHTML = projects[j].description;
    live.href = projects[j].live;
    repo.href = projects[j].repo;

    for (let t = 0; t < projects[j].techs.length; t += 1) {
      techsLi[t].innerHTML = projects[j].techs[t];
    }
    body.classList.add('overflow');
  };
}

closePopup.onclick = () => {
  popup.classList.remove('openpopup');
  body.classList.remove('overflow');
};