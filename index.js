// // 1. Створити сторінку на якій будемо відображати базовий текст в span("Очікую на ввід даних").
// При натисканні alt + A, замість спана зявиться інпут з аналогічним текстом, який 
// тепер ви зможете відредагувати.Далі коли ви натисните shift + S дані збережуться 
// і знов будуть відображатись як span.

let spanContainer = document.createElement('div');
let textSpan = document.createElement('span');
let textInput = document.createElement('input');
let text = 'Очікую на ввід даних'
textInput.value = text;
textInput.style.display = 'none';
textSpan.textContent = textInput.value;
document.body.append(spanContainer);
spanContainer.append(textSpan);
spanContainer.append(textInput);

window.addEventListener('keydown', e => {
     if (e.altKey && e.code == 'KeyU') {
         textSpan.style.display = 'none';
         textInput.style.display = 'inline-block';
     }
});

window.addEventListener('keydown', e => {
    if (e.shiftKey && e.code == 'KeyS') {
        textSpan.style.display = 'inline';
        textSpan.textContent = textInput.value;
        textInput.style.display = 'none';
    }
});

// // 2. Повісити івент лісенер на ресайз сторінки, 
// коли розмір сторінки буде менше 600px, виводити лог 
// ми векористовуємо мобільну версію, при більшому розмірі сторінки - що 
// ми використовуємо десктоп версію.

window.addEventListener('resize', () => {
    innerWidth >= 600 ? console.log('Ви використовуєте десктопну версію') : console.log('Ви використовуєте мобільну версію')
})

// // 3. Повісити івент на інпут, при зміні стану інпута - виводити повідомленням зі значенням яке зараз є введено.

let inpWrapper = document.createElement('div');
let inpValue = document.createElement('p');
let inp = document.createElement('input');
inpValue.textContent = 'Writhe smth into input';
inpWrapper.append(inp);
inpWrapper.append(inpValue);

inp.addEventListener('input', () => inpValue.textContent = inp.value);

document.body.append(inpWrapper);

// // 4. При натисканні на кнопку альт + о виводити модальне вікно на екран, альт + с - закривати.

let modalWrapper = document.createElement('div');
modalWrapper.classList = "modal__wrapper";
modalWrapper.textContent = 'Alt + c';

document.body.append(modalWrapper);

window.addEventListener('keydown', e => {
    if (e.altKey && e.code == 'KeyO') {
        modalWrapper.classList = "modal__wrapper modal__wrapper-active"
    }
});

window.addEventListener('keydown', e => {
    if (e.altKey && e.code == 'KeyC') {
        modalWrapper.classList = "modal__wrapper"
    }
});

// // 5. Створити модальне відкно аналог Алерта але з гарним дизайном.по кліку на 
// кнопку зявляється модальне вікно по центрі екрану(центрування елемента).
// В модальному вікні має бути текст та кнопка закрити.

let modalBtn = document.createElement('button');
modalBtn.classList = 'modal__button';
modalBtn.textContent = 'Open modal window';

let modalWind = document.createElement('div');
modalWind.classList = 'modal__window'
let modalText = document.createElement('p');
let modalButton = document.createElement('button');
let modalImg = document.createElement('div');

modalText.textContent = 'The most beautiful modal window';
modalButton.textContent = 'Close window';
modalImg.classList = 'modal__img';

modalWind.append(modalText);
modalWind.append(modalImg);
modalWind.append(modalButton);

modalBtn.onclick = () => modalWind.classList= 'modal__window modal__window-active';
modalButton.onclick = () => modalWind.classList= 'modal__window';
document.body.append(modalBtn);
document.body.append(modalWind);