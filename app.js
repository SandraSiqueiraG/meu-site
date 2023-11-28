alert("Saiba quem foi Ada Lovelace e entenda o seu legado na tecnologia!");

'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);
});

var swiper = new Swiper('.swiper', {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-next",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    keyboard: true,
});
