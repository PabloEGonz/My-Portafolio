const projects = [{
  name: 'Multi Post Stories',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  image: 'images/popup-image.png',
  techs: ['HTML', 'Bootstrap', 'Ruby on Rails'],
  live: '#',
  repo: '#',
},
{
  name: 'Project 2',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  image: 'images/popup-image.png',
  techs: ['HTML', 'Css', 'Bootstrap'],
  live: '#',
  repo: '#',
},
{
  name: 'Project 3',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  image: 'images/popup-image.png',
  techs: ['HTML', 'Bootstrap', 'Ruby'],
  live: '#',
  repo: '#',
},
{
  name: 'Project 4',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  image: 'images/popup-image.png',
  techs: ['HTML', 'Bootstrap', 'Ruby'],
  live: '#',
  repo: '#',
},
{
  name: 'Project 5',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  image: 'images/popup-image.png',
  techs: ['HTML', 'Bootstrap', 'Ruby'],
  live: '#',
  repo: '#',
},
{
  name: 'Project 6',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  image: 'images/popup-image.png',
  techs: ['HTML', 'Bootstrap', 'Ruby'],
  live: '#',
  repo: '#',
},
{
  name: 'Project 7',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
  paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
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
const paragr = document.querySelector('#second-paragraph');
const live = document.querySelector('#live');
const repo = document.querySelector('#repo');

for (let j = 0; j < popupBtn.length; j += 1) {

  popupBtn[j].onclick = () => {
    popup.classList.add('openpopup');

    nameH.innerHTML = projects[j].name;
    imageImg.src = projects[j].image;
    description.innerHTML = projects[j].description;
    paragr.innerHTML = projects[j].paragraph;
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

// cards

const cardTitle = document.getElementsByClassName('card-title');
const cardDescription = document.getElementsByClassName('card-descrtiption');
const cardTechs = document.getElementsByClassName('card-techs');

window.onload = () => {
  let count = 0;
  for (let l = 0; l < cardTitle.length; l += 1) {
    cardTitle[l].innerHTML = projects[l].name;
    cardDescription[l].innerHTML = projects[l].description;

    for (let s = 0; s < projects[l].techs.length; s += 1) {
      cardTechs[count].innerHTML = projects[l].techs[s];
      count += 1;
    }
  };
}
