import {cardCreate, cardMealCreate, builderCategories} from './renders.js';
const pointCard = document.querySelector('.box');
const pointMeal = document.querySelector('.modal');
const inputText = document.querySelector('.inputText');
const pointCategory = document.querySelector('.categories');
let storage = [];

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
    storage = data.meals;
    console.log(storage);
    cardCreate(pointCard,data.meals);
  }

async function getById(id) {
    let url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const res = await fetch(url);
    const data = await res.json();
    cardMealCreate(pointMeal,data.meals[0]);
}
getData(apiUrl);


function clear() {
    pointCard.innerHTML = '';
}

// прослушка на инпут
inputText.addEventListener('input', (event) => {
   let resultFilter = [];
   let searchText = event.target.value;
   resultFilter = storage.filter((el) => el.strMeal.toLowerCase().includes(searchText.toLowerCase()));

   console.log(resultFilter);
   clear();
   cardCreate(pointCard,resultFilter);
});


//Список категорий
let urlCategory =`https://www.themealdb.com/api/json/v1/1/list.php?c=list`;

    async function getCategoryList(url){
        
        let result = await fetch(url);
        let categories = await result.json();
        console.log(categories);
        builderCategories(pointCategory,categories.meals);
    }
    getCategoryList(urlCategory);