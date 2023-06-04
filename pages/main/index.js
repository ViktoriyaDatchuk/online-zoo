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

/*pets carousel start*/

const pets = [
    {
        photo: '../../assets/images/animal_card/Pandas.png',
        title: 'Giant Pandas',
        location: 'Native to Southwest China',
        icon: '../../assets/icons/banana-bamboo_icon.svg'
    },

    {
        photo: '../../assets/images/animal_card/Gorillas.png',
        title: 'Gorillas',
        location: 'Native to Congo',
        icon: '../../assets/icons/banana-bamboo_icon.svg' 
    },

    {
        photo: '../../assets/images/animal_card/Gorillas2.png',
        title: 'Gorillas',
        location: 'Native to Congo',
        icon: '../../assets/icons/banana-bamboo_icon.svg'
    },

    {
        photo: '../../assets/images/animal_card/Cheetahs.png',
        title: 'Cheetahs',
        location: 'Native to Africa',
        icon: '../../assets/icons/meet-fish_icon.svg'
    },

    {
        photo: '../../assets/images/animal_card/Two-toed.png',
        title: 'Two-toed Sloth',
        location: 'Mesoamerica, South America',
        icon: '../../assets/icons/banana-bamboo_icon.svg'
    },

    {
        photo: '../../assets/images/animal_card/Eagles.png',
        title: 'Eagles',
        location: 'Native to South America',
        icon: '../../assets/icons/meet-fish_icon.svg'
    },

    {
        photo: '../../assets/images/animal_card/Penguins.png',
        title: 'Penguins',
        location: 'Native to Antarctica',
        icon: '../../assets/icons/meet-fish_icon.svg'
    },

    {
        photo: '../../assets/images/animal_card/Alligators.png',
        title: 'Alligators',
        location: 'Native to Southeastern United States',
        icon: '../../assets/icons/meet-fish_icon.svg'
    }
]
const btnLeft = document.querySelector('.left-arrow');
const btnRight = document.querySelector('.right-arrow');
const carousel = document.querySelector('.pets__carousel');
const leftItem = document.querySelector('#left-item');
const rightItem = document.querySelector('#right-item');

const createRandomNumber = () => {
    let set = new Set();
    let number;
    while (set.size !== 6) {
        number = Math.floor(Math.random() * 8);
        set.add(number);
    }
    return set;
}

const createItem = (item) => {
    const numbers = createRandomNumber();
    const createCards = item.querySelectorAll('.pets__card');
    let i = 0;
    for (number of numbers) {
        createCards[i].querySelector('.pets__image').src = pets[number].photo;
        createCards[i].querySelector('.pets__title').innerHTML = pets[number].title;
        createCards[i].querySelector('.pets__location').innerHTML = pets[number].location;
        createCards[i].querySelector('.pets__icon').src = pets[number].icon;
        i++;
    }
}

createItem(leftItem);
createItem(rightItem);

const moveLeft = () => {
    carousel.classList.add('transition-left');
    btnLeft.removeEventListener('click', moveLeft);
    btnRight.removeEventListener('click', moveRight);
}

const moveRight = () => {
    carousel.classList.add('transition-right');
    btnLeft.removeEventListener('click', moveLeft);
    btnRight.removeEventListener('click', moveRight);
}

btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);

carousel.addEventListener('animationend', (animationEvent) => {
    let changeItem;
    if (animationEvent.animationName === "move-left") {
        carousel.classList.remove('transition-left');
        changeItem = leftItem;
    } else if (animationEvent.animationName === "move-right") {
        carousel.classList.remove('transition-right');
        changeItem = rightItem;
    }

    const content = changeItem.innerHTML;
    document.querySelector('#active-item').innerHTML = content;
    createItem(changeItem);

    btnLeft.addEventListener('click', moveLeft);
    btnRight.addEventListener('click', moveRight);
})

/*pets carousel end*/

/*testimonails carousel start*/

const rangeElem = document.querySelector('.slider');
const testimonailsCarousel = document.querySelector('.testimonails__carousel');
const testimonailsCards = document.querySelectorAll('.testimonial__card');


const rangeValue = () => {
    let value = rangeElem.value;
    testimonailsCards.forEach(e => {
        e.classList.remove('active-testimonail');
    })
    for (let i = value; i <= +value + 2; i++) {
        testimonailsCards[i].classList.add('active-testimonail');
    }
    testimonailsCarousel.classList.forEach(e => {
        if (e !== 'testimonails__carousel') {
            testimonailsCarousel.classList.remove(e);
        }
    })
    testimonailsCarousel.classList.add(`step${value}`);
}

rangeElem.addEventListener('input', rangeValue);

window.addEventListener('resize', () => {
    testimonailsCards.forEach(e => {
        e.classList.remove('hidden');
    })
    if (window.innerWidth <= 840) {
        testimonailsCarousel.classList.forEach(e => {
            if (e !== 'testimonails__carousel') {
                testimonailsCarousel.classList.remove(e);
            }
        })
        testimonailsCards.forEach(e => {
            if (!e.classList.contains('active-testimonail')) {
                e.classList.add('hidden');
            }
        })
    } else {
        let value = rangeElem.value;
        testimonailsCarousel.classList.add(`step${value}`);
    }
})

/*testimonails carousel start*/

/* pop-up start*/

const activeTestimonail = document.querySelectorAll('.testimonial__card');
const popUpTestionail = document.querySelector('.pop-up__testimonail');
const popUp = document.querySelector('.pop-up');
const popUpContent = document.querySelector('.pop-up__content');
const popUpClose = document.querySelector('.pop-up__close');

showTestimonail = (act) => {
    popUp.classList.remove('visibility');
    popUpContent.classList.add('pop-up__active');
    popUpTestionail.innerHTML = act.innerHTML;
    popUpTestionail.querySelector('.testimonial__text').classList.add('pop-up__text');
}

activeTestimonail.forEach(e => {
    e.addEventListener('click', () => {
        showTestimonail(e);
    });
})

popUpClose.addEventListener('click', () => {
    popUpContent.classList.remove('pop-up__active');
    popUpContent.addEventListener('transitionend', () => {
        if (!popUpContent.classList.contains('pop-up__active')) {
            popUp.classList.add('visibility');
        }
    })
});

window.addEventListener('click', e => {
    const target = e.target;
    if (!target.closest('.pop-up__content') && (!target.closest('.active-testimonail'))) {
        popUpContent.classList.remove('pop-up__active');
        popUpContent.addEventListener('transitionend', () => {
            if (!popUpContent.classList.contains('pop-up__active')) {
                popUp.classList.add('visibility');
            }
    })
    } 
});

/* pop-up end*/