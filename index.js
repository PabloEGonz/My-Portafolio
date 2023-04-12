const projects = [ project1 = {
  name : 'project 1',
  description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat scelerisque. Sed felis eget velit aliquet sagittis id consectetur purus. Sodales neque sodales ut etiam sit.',
  image : '',
  techs : ['HTML', 'Css', 'Bootstrap', 'Ruby'],
  live : '',
  repo : ''
},
project2 = {
  name : 'project 2',
  description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat scelerisque. Sed felis eget velit aliquet sagittis id consectetur purus. Sodales neque sodales ut etiam sit.',
  image : '',
  techs : ['HTML', 'Css', 'Bootstrap'],
  live : '',
  repo : ''
},
project3 = {
  name : 'project 3',
  description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat scelerisque. Sed felis eget velit aliquet sagittis id consectetur purus. Sodales neque sodales ut etiam sit.',
  image : '',
  techs : ['HTML', 'Bootstrap', 'Ruby'],
  live : '',
  repo : ''
},
project4 = {
  name : 'project 4',
  description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat scelerisque. Sed felis eget velit aliquet sagittis id consectetur purus. Sodales neque sodales ut etiam sit.',
  image : '',
  techs : ['HTML', 'Bootstrap', 'Ruby'],
  live : '',
  repo : ''
},
project5 = {
  name : 'project 5',
  description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat scelerisque. Sed felis eget velit aliquet sagittis id consectetur purus. Sodales neque sodales ut etiam sit.',
  image : '',
  techs : ['HTML', 'Bootstrap', 'Ruby'],
  live : '',
  repo : ''
},
project6 = {
  name : 'project 6',
  description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat scelerisque. Sed felis eget velit aliquet sagittis id consectetur purus. Sodales neque sodales ut etiam sit.',
  image : '',
  techs : ['HTML', 'Css', 'Bootstrap', 'Ruby'],
  live : '',
  repo : ''
},
project7 = {
  name : 'project 7',
  description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat scelerisque. Sed felis eget velit aliquet sagittis id consectetur purus. Sodales neque sodales ut etiam sit.',
  image : '',
  techs : ['HTML', 'Bootstrap', 'Ruby'],
  live : '',
  repo : ''
}
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
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.close-popup');

const nameH = document.querySelector('#image');
const techsLi = document.getElementsByClassName('.techs');
const imageImg = document.querySelector('#image');
const description = document.querySelector('#description');
const live = document.querySelector('#live');
const repo = document.querySelector('#repo');


for (let j = 0; j < popupBtn.length; j += 1) {
  popupBtn[j].onclick = () => {
    popup.classList.add('openpopup');

    console.log(projects[j].name);

  };
}

closePopup.onclick = () => {
  popup.classList.remove('openpopup');
  };