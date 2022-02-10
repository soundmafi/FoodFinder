import {cardCreate, cardMealCreate, builder} from './renders.js';
const pointCard = document.querySelector('.box');
const pointMeal = document.querySelector('.container');

let apiUrl = `https://themealdb.com/api/json/v1/1/filter.php?i=`;

pointCard.addEventListener('click', e => {
    if (e.target.classList.value === 'card__btn'){
        let id = e.target.parentNode.getAttribute('data-id');
        getById(id);
    }
});

async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.dir(data.meals);
    cardCreate(pointCard,data.meals);
  }

async function getById(id) {
    let url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const res = await fetch(url);
    const data = await res.json();
    console.dir(data.meals);
    cardMealCreate(pointMeal,data.meals[0]);
}

getData(apiUrl);
