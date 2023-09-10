//1 Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px.
// const mainDivElem = document.createElement('main_div');
// const divElem = document.createElement('div');
// const button = document.createElement('button');
// document.body.append(mainDivElem)
// mainDivElem.append(divElem, button)
// button.style.width = '60px'
// button.style.height = '20px'
// button.innerText = 'click'

// divElem.style.width = '200px';
// divElem.style.height = '200px';
// divElem.style.backgroundColor = 'red';
// button.addEventListener('click', function (){
// divElem.style.backgroundColor = 'green';
// divElem.style.height = '100px';
// divElem.style.width = '100px'
// })

//2 Создать кнопку и розовый квадрат с размерами 200х200px. При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.

// const mainDiv = document.createElement('main_div');
// const divElem = document.createElement('div');
// const button = document.createElement('button');
// document.body.append(mainDiv)
// mainDiv.append(divElem, button)
// button.style.width = '60px'
// button.style.height = '20px'
// button.innerText = 'click'

// divElem.style.width = '200px';
// divElem.style.height = '200px';
// divElem.style.backgroundColor = 'pink';

// button.addEventListener('click', function (){
// divElem.style.backgroundColor = 'blue';
// console.log(divElem.style.backgroundColor)
// })

//3 Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку увеличивать высоту и ширину квадрата на 20px.

// const mainDiv = document.createElement('main_div');
// const divElem = document.createElement('div');
// const button = document.createElement('button');
// document.body.append(mainDiv)
// mainDiv.append(divElem, button)
// button.style.width = '60px'
// button.style.height = '20px'
// button.innerText = 'click'

// divElem.style.width = '150px';
// divElem.style.height = '150px';
// divElem.style.backgroundColor = 'green';

// button.addEventListener('click', e => {
//     const currentWidth = divElem.clientWidth;
//     const currentHeight = divElem.clientHeight;

//     divElem.style.width = (currentWidth + 20) + 'px';
//     divElem.style.height = (currentHeight + 20) + 'px';
// })

// 4 Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный.
// const mainDiv = document.createElement('main_div');
// const divElem = document.createElement('div');
// divElem.classList.add('root')
// const button = document.createElement('button');
// document.body.append(mainDiv)
// mainDiv.append(divElem, button)
// button.style.width = '60px'
// button.style.height = '20px'
// button.innerText = 'click'

// button.addEventListener('click', function(){
//     const pElem = document.createElement('p');
//     pElem.style.backgroundColor = 'blue';
//     pElem.innerText = 'I am here to learn JS'
//     divElem.append(pElem)
// })

// 5 Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий.

const mainDiv = document.createElement('div');
const divElem = document.createElement('div');
divElem.classList.add('root');
const button = document.createElement("button");
document.body.appendChild(mainDiv);
mainDiv.appendChild(divElem);
mainDiv.appendChild(button);

button.style.width = '60px';
button.style.height = '20px';
button.innerText = "Click";

let isGreen = true; // Флаг для отслеживания текущего цвета

button.addEventListener('click', function () {
    const pElem = document.createElement('p');
    if (isGreen) {
        pElem.style.backgroundColor = 'blue';
        pElem.innerText = 'I hope to have enough strength and passion';
    } else {
        pElem.style.backgroundColor = 'green';
        pElem.innerText = 'I am here to learn 3S°';
    }
    isGreen = !isGreen; // Переключение флага
    divElem.appendChild(pElem);
});