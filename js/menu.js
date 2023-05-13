const menuButton = document.querySelector('.menu-button');
const menuList = document.querySelector('.menu-list');
const candies = document.querySelectorAll('.menu-list li');
const noCandy = document.querySelector('.no-candy');

let index = 0;

function fadeOut(element) {
    let opacity = 1;

    function decreaseOpacity() {
        opacity -= 0.05;
        element.style.opacity = opacity;

        if (opacity <= 0) {
            element.style.display = 'none';
            element.style.opacity = 1;
        } else {
            setTimeout(decreaseOpacity, 20);
        }
    }

    decreaseOpacity();
}

menuButton.addEventListener('click', function() {
    if (menuList.style.display === "none") {
        menuList.style.display = "block";
    } else {
        menuList.style.display = "none";
    }

});

for (let i=0; i<candies.length; i++) {
    candies[i].addEventListener('click', function() {
        fadeOut(candies[index]);

        index++;

        if (index === candies.length) {
            setTimeout(function() {
                noCandy.classList.remove('hidden');
            }, 2000);
        }
    });
    
}