/*burger menu start*/

const burgerItem = document.querySelector('.burger');
const menu = document.querySelector('.navigation__size');
const menuClose = document.querySelector('.navigation-close');
const menuLink = document.querySelectorAll('.burger__link');
const blackoutItem = document.querySelector('.blackout');

burgerItem.addEventListener('click', () => {
    menu.classList.add('navigation-active');
    blackoutItem.classList.add('blackout-active');
});

menuClose.addEventListener('click', () => {
    menu.classList.remove('navigation-active');
    blackoutItem.classList.remove('blackout-active');
});

for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener('click', () => {
        menu.classList.remove('navigation-active');
        blackoutItem.classList.remove('blackout-active');                
    });
}

window.addEventListener('click', e => {
    const target = e.target;
    if (!target.closest('.navigation__size') && (!target.closest('.burger'))) {
        menu.classList.remove('navigation-active');
        blackoutItem.classList.remove('blackout-active');
    } 
});

/*burger menu end*/

/*amount start*/

const sumPoint = document.querySelectorAll('.progress-bar__point');
const sumValue = document.querySelectorAll('.progress-bar__value');
const amount = document.querySelector('.another-amount');

const setAmountValue = () => {
    sumPoint.forEach(e => {
        if (e.checked == true) {
            let label = document.querySelector(`[for="${e.id}"]`);
            amount.value = label.dataset.debtAmount.slice(1);
        }
    })
}

setAmountValue();

sumPoint.forEach(e => {
    e.addEventListener('input', setAmountValue);
})

amount.addEventListener('change', () => {
    let coincidence = false;
    sumValue.forEach(elem => {
        if (amount.value === elem.dataset.debtAmount.slice(1)) {
            coincidence = true;
            let key = elem.getAttribute('for');
            document.querySelector(`[id="${key}"]`).checked = true;
        }
    })
    if (!coincidence) {
        sumPoint.forEach(elem => {
            elem.checked = false;
        })
    }
})

/*amount end*/