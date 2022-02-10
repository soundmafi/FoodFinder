export function cardCreate(root, data) {
    data.forEach((el) => {

        let card =`<div class="card" data-id='${el.idMeal}'>
                        <img src="${el.strMealThumb}" alt="" class="cardPicture">
                        <p class="cardTitile">${el.strMeal}</p>
                        <button class="card__btn">Get More</button>
                    </div>`;

    root.innerHTML += card;
    });
}

export function cardMealCreate(root,data){

    let groundElement = builder('div','meal');
    groundElement.appendChild(builder('button','meal__btnClose'));
    groundElement.appendChild(builder('p','meal__title').text = `${data.strMeal}`);
    groundElement.appendChild(builder('img','meal__picture').src = `${data.strMealThumb}`);
    groundElement.appendChild(builder('p','meal__category').textContent = `${data.strCategory}`);


    console.log(groundElement);
    let pageMeal = `<div class="meal">
          <button class="meal__btnClose">X</button>
          <p class="meal__title">${data.strMeal}</p>
          <img class="meal__picture"  src="${data.strMealThumb}" alt="meal picture">
          <p class="meal__category">${data.strCategory}</p>
          <p class="meal__description">${data.strInstructions}</p>
          <div class="meal__ingredients">ingredients
          <p class="meal__ingredient">massive of ingredients</p>
      </div>`;
    root.innerHTML += pageMeal;
    let buttonClose = document.querySelector('.meal__btnClose');
    buttonClose.addEventListener('click', e =>{
        console.log(e.target);
    document.querySelector('.meal').remove();
    });
}


export function builder(el,cl){
    let element = document.createElement(el);
    element.classList.add(cl);
    // console.log(element);
    return element;
} 