
const spotlight = document.querySelector('.spotlight');

window.addEventListener('mousemove', (e) => {

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    spotlight.style.left = `${mouseX - 500}px`; // Spotlight's width/2
    spotlight.style.top = `${mouseY - 500}px`; // Spotlight's height/2
});