const dataBase = [];


const modalAdd = document.querySelector('.modal__add');
// console.log(modalAdd)
const addAd = document.querySelector('.add__ad');

const modalBtnSubmit = document.querySelector('.modal__btn-submit');

const modalSubmit = document.querySelector('.modal__submit');

addAd.addEventListener('click', function(){
    modalAdd.classList.remove('hide');
    modalBtnSubmit.disabled = true;
});

modalAdd.addEventListener('click', function(event){
    if(event.target.classList.contains('modal__close')||event.target.classList.contains('modal')){
        modalAdd.classList.add('hide');
        modalSubmit.reset();
    }
});


const catalog = document.querySelector('.catalog');
const modalItem = document.querySelector('.modal__item');
catalog.addEventListener('click', () => {
    modalItem.classList.remove('hide');
})

modalItem.addEventListener('click', function(event){
    if(event.target.classList.contains('modal__close')||event.target.classList.contains('modal')){
        modalItem.classList.add('hide');
        modalSubmit.reset();
    }
});


document.addEventListener('keydown', event => {
    if(event.code === 'Escape'){
        modalItem.classList.add('hide');
        modalAdd.classList.add('hide');
    }
});

const elementsModalSubmit = [...modalSubmit.elements].filter(elem => elem.tagName !== 'BUTTON' || elem.type !== 'submit');

// console.log(elementsModalSubmit);

modalSubmit.addEventListener('input', () => {
    const validForm = elementsModalSubmit.every(elem => elem.value);
    if(validForm){
        modalBtnSubmit.disabled = false;
        document.querySelector('.modal__btn-warning').style.display = 'none';
    }
    else{
        modalBtnSubmit.disabled = true;
        document.querySelector('.modal__btn-warning').style.display = 'block';
    }
});


modalSubmit.addEventListener('submit', function(event) {
    event.preventDefault();
    // console.log(event);
    const itemObj = {};
    for(const elem of elementsModalSubmit){
        itemObj[elem.name] = elem.value;
    }
    dataBase.push(itemObj);
    modalSubmit.reset();
    console.log(dataBase);
});
