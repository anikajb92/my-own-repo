/*const h2 = document.createElement('h2');
h2.textContent = "This content added by JavaScript, will be footer";

document.querySelector('body').appendChild(h2);*/

const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper');

portfolioItems.forEach(portfolioItem => {
    portfolioItem.addEventListener('mouseover', () => {
        portfolioItem.childNodes[1].classList.add('img-darken');
        console.log(portfolioItem.childNodes[1].classList);
    })
    portfolioItem.addEventListener('mouseout', () => {
        portfolioItem.childNodes[1].classList.remove('img-darken');
        console.log(portfolioItem.childNodes[1].classList);
    })
})