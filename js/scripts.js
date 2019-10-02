const selector = document.querySelectorAll(".category-link");
const triangle = document.querySelector('.triangle');

for(let i = 0; i <= selector.length; i++){
    for(let j = 0; j <= selector.length; j++) {
        selector[i].addEventListener('click', function () {
            selector[i].classList.add('-active');
            selector[j].classList.remove('-active');

            switch (i) {
                case 0:
                    triangle.style.left = "32.8%";
                    triangle.style.opacity = '1';
                    break;
                case 1:
                    triangle.style.left = "44.2%";
                    triangle.style.opacity = '1';
                    break;
                case 2:
                    triangle.style.left = "55.5%";
                    triangle.style.opacity = '1';
                    break;
                case 3:
                    triangle.style.left = '66.2%';
                    triangle.style.opacity = '1';
            }
        })
    }
}