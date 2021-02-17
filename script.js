
const card = document.querySelector('.card');
const container = document.querySelector('.container');
//foto defineren
const portret = document.querySelector('.portret img');

//beweeg animatie
container.addEventListener('mousemove', (e) => {
    let xaxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yaxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xaxis}deg) rotateX(${yaxis}deg)`;
});

//naar binnnen animatie
container.addEventListener('mouseenter', e =>{
    card.style.transition = 'none';
    //foto eruit halen
    portret.style.transform = 'translateZ(100px)';
}) 

//naar buiten animatie
container.addEventListener('mouseleave', e => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //foto terug zetten
    portret.style.transform = 'translateZ(0px) rotate(0deg)';
})