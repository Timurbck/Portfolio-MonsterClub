let offset = 0; 
const sliderLine = document.querySelector('.tariff-slider__wrapper');
const sliderItem = document.querySelector('.tariff-slider__item');
const sliderItemAll = document.querySelectorAll('.tariff-slider__item');

let sliderItemMr = parseInt(getComputedStyle(sliderItem).marginRight); // getComputedStyle(sliderItem).marginRight => получаю margin-right; parseInt(elem.marginRight, 10) => убираю px
let sliderItemWidth = sliderItem.getBoundingClientRect().width; // получаю ширину элемента
let sliderMaxWidth = sliderItemAll.length * (sliderItemWidth + sliderItemMr); // получаю общуюю ширину итомов
let sliderContainerWidth = document.querySelector('.tariff-slider__wrapper').getBoundingClientRect().width; // получаю ширину видимого контейнера

document.querySelector('.tariff-slider__next').addEventListener('click', () => {
    offset = offset + sliderItemWidth + sliderItemMr;
    if(offset > sliderMaxWidth - sliderContainerWidth) {
        offset = 0;
    }
    let x = -offset + 'px';

    sliderLine.style.transform = 'translateX(' + x + ')';
    console.log(sliderLine.style.transform);
});

document.querySelector('.tariff-slider__prev').addEventListener('click', () => {
    offset = offset - sliderItemWidth - sliderItemMr;
    if(offset < -sliderItemWidth) {
        offset = sliderMaxWidth - sliderContainerWidth - sliderItemMr;
    }
    let x = -offset + 'px';
    console.log(offset);

    sliderLine.style.transform = 'translateX(' + x + ')';
    console.log(sliderLine.style.transform);
});



// document.querySelector('.tariff-slider').addEventListener('click', (e) => {
//     let target = e.target;
//     if(target.className == ('tariff-slider__item-img')) {
          
//         for(let i = 0; i < sliderItemAll.length; i++) {

//             sliderItemAll[i].classList.add('tariff-slider__item_active');
//             console.log(sliderItemAll[i]);

//         }  
//     }
// });

//работат но не все =>

// for(i = 0; i < sliderItemAll.length; i++) {

//     sliderItemAll[i].addEventListener('click', function (e) {
//         target = e.target;
//         document.querySelector('.tariff-slider__next-modal').style.display = 'block';
//         document.querySelector('.tariff-slider__prev-modal').style.display = 'block';

//         for(k = 0; k < sliderItemAll.length; k++) {

//             if (sliderItemAll[k].classList.contains('tariff-slider__item_active')) {
//                 sliderItemAll[k].classList.remove('tariff-slider__item_active');     
//                 this.classList.add('tariff-slider__item_active');
//             } else {
//                 this.classList.add('tariff-slider__item_active');
//             }
//         }
//     });
// }

document.querySelector('.tariff-slider__next-modal').addEventListener('click', function () {
    for (let i = 0; i < sliderItemAll.length; i++) {

        if (sliderItemAll[i].classList.contains('tariff-slider__item_active')) {

            sliderItemAll[i].classList.remove('tariff-slider__item_active');     
            i = i + 1;
            if (i > sliderItemAll.length - 1) {
                i = 0;
                sliderItemAll[i].classList.add('tariff-slider__item_active');
            }
            sliderItemAll[i].classList.add('tariff-slider__item_active');

            console.log(sliderItemAll[i]);
        }
    } 
});

document.querySelector('.tariff-slider__prev-modal').addEventListener('click', function () {
    for (let i = 0; i < sliderItemAll.length; i++) {

        if (sliderItemAll[i].classList.contains('tariff-slider__item_active')) {

            sliderItemAll[i].classList.remove('tariff-slider__item_active');     
            i = i -1;
            if (i < 0) {
                i = sliderItemAll.length;
                i = i - 1;
                sliderItemAll[i].classList.add('tariff-slider__item_active');
            }
            sliderItemAll[i].classList.add('tariff-slider__item_active');

            console.log(sliderItemAll[i]);
            console.log(i);

        }
    } 
});

//questions

const questionsContent = document.querySelector('.questions__content');
const questionsWrapper = document.querySelectorAll('.questions__wrapper');
const questionTextSecond = document.querySelectorAll('.questions__text-second');

let selectedItem;

questionsContent.onclick = function(event) {

    let targetItem = event.target.closest('.questions__wrapper'); // (1)

    if (!targetItem) return; // (2)
  
    if (!questionsContent.contains(targetItem)) return; // (3)


    show(targetItem);
};

function show(item) {

	if (selectedItem) { // убрать существующую подсветку, если есть
		selectedItem.classList.remove('questions__wrapper_active');
	}

	selectedItem = item;
	selectedItem.classList.add('questions__wrapper_active'); // подсветить новый td
}

//nav menu

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    menu.classList.add('menu_active');
    hamburger.style.opacity = 0;
    nav.style.zIndex = 1;
});

close.addEventListener('click', () => {
    menu.classList.remove('menu_active');
    hamburger.style.opacity = 1;
    nav.style.zIndex = 100;
});

document.querySelector('#subscription').addEventListener('click', () => {
    document.querySelector('.subscription').classList.add('subscription_active');
});
document.querySelector('.form__close').addEventListener('click', () => {
    document.querySelector('.subscription').classList.remove('subscription_active');
});


