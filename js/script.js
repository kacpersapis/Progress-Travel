const hamburger =document.querySelector('.hamburger');
const mainNav =document.querySelector('.main-nav');
const footerYear = document.querySelector('.footer__year')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mainNav.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mainNav.classList.remove('active');

}))

const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

handleCurrentYear();