import {cardCreate, cardMealCreate, builderCategories, builderAreas} from './renders.js';
const pointCard = document.querySelector('.box');
const pointMeal = document.querySelector('.modal');
const inputText = document.querySelector('.inputText');
const pointCategory = document.querySelector('.categories');
const pointArea = document.querySelector('.areas');

let storage = [];



let apiUrl = `https://themealdb.com/api/json/v1/1/filter.php?i=`;
pointCard.addEventListener('click', e => {
    if (e.target.classList.value === 'card__btn'){
        let id = e.target.parentNode.getAttribute('data-id');
        getById(id);
    }
});

// Получение всех карточек
async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    storage = data.meals;
    cardCreate(pointCard,data.meals);
  }

//Получение блюда по Id
  async function getById(id) {
    let url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const res = await fetch(url);
    const data = await res.json();
    cardMealCreate(pointMeal,data.meals[0]);
}
getData(apiUrl);

// удаление из дерева карточек
function clear() {
    pointCard.innerHTML = '';
}

// прослушка на инпут
inputText.addEventListener('input', (event) => {
   let resultFilter = [];
   let searchText = event.target.value;
   resultFilter = storage.filter((el) => el.strMeal.toLowerCase().includes(searchText.toLowerCase()));
   clear();
   cardCreate(pointCard,resultFilter);
});

//Список категорий
let urlCategory =`https://www.themealdb.com/api/json/v1/1/list.php?c=Seafood`;

//Получение списка категорий
async function getCategoryList(url){
    let result = await fetch(url);
    let categories = await result.json();
    builderCategories(pointCategory,categories.meals);
}
getCategoryList(urlCategory);

// Запрос выбранной категории и отрисовка
async function getFilterCategory(cat){
    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`);
    let arrCategory = await res.json();
    storage = arrCategory;
    clear();
    cardCreate(pointCard,storage.meals);
    return;
}

//прослушка на выбор по категории
pointCategory.addEventListener('click', (event) => {
    let searchText = event.target.textContent;
    clear();
    getFilterCategory(searchText);
});

//Список стран
let urlAreaList ='https://www.themealdb.com/api/json/v1/1/list.php?a=list';

async function getListArea(url){
    let answer = await fetch(url);
    let result = await answer.json();
    console.log(result);
    builderAreas(pointArea,result.meals);
}
getListArea(urlAreaList);

pointArea.addEventListener('click', (event) => {
    let searchText = event.target.textContent;
    clear();
    getFilterArea(searchText);
});

async function getFilterArea(cat){
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${cat}`);
        let arrArea = await res.json();
        storage = arrArea;
        clear();
        cardCreate(pointCard,storage.meals);
        return;
}