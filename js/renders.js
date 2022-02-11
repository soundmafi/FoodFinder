export function cardCreate(root, data) {
    data.forEach((el) => {
        let card =`<div class="card" data-id='${el.idMeal}'>
                        <img src="${el.strMealThumb}" alt="" class="cardPicture">
                        <p class="cardTitle">${el.strMeal}</p>
                        <button class="card__btn">Get More</button>
                    </div>`;
    root.innerHTML += card;
    });
}

export function cardMealCreate(root,data){
    let groundElement = builder('div','meal');
    let buttonClose = builder('button','meal__btnClose');
    buttonClose.textContent = `X`;
    groundElement.appendChild(buttonClose);
    let title = builder('p','meal__title');
    title.textContent = `${data.strMeal}`;
    groundElement.appendChild(title);
    let photo = builder('img','meal__picture');
    photo.src = `${data.strMealThumb}`;
    groundElement.appendChild(photo);
    let category = builder('p','meal__category');
    category.textContent =`${data.strCategory}`;
    groundElement.appendChild(category);
    let description = builder('p','meal__description');
    description.textContent =`${data.strInstructions}`;
    groundElement.appendChild(description);
    groundElement.appendChild(builder('p','meal__ingredients'));
    root.appendChild(groundElement);
    // Просслушка на удаление элемента
    buttonClose.addEventListener('click', e =>{
    document.querySelector('.meal').remove();
    });
}

export function builder(el,cl){
    let element = document.createElement(el);
    element.classList.add(cl);
    return element;
} 

export function builderCategories(root,list){
       list.forEach(el => {
        let category = builder('a','category');
            category.textContent = el.strCategory;
            root.appendChild(category);
       });
}

export function builderAreas(root,list){
    list.forEach(el => {
        let area = builder('a','area');
            area.textContent = el.strArea;
            root.appendChild(area);
       });
}