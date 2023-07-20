let toggle = document.querySelector(".toggle");
let body = document.querySelector("body");
const ensembles = document.querySelector('.ensemble-cartes');
const rectangle = document.querySelector('.rectangle');
const img_kineo = document.querySelector('.image-kineo-img')
const img_mouveo = document.querySelector('.image-mouveo-img');
const img_osteo = document.querySelector('.image-osteo-img');
const cabinet = document.querySelector('.bloc-rencontrer-cabinet');
const telephone = document.querySelector('.bloc-rencontrer-telephone');
const email = document.querySelector('.bloc-rencontrer-email');
const form_cartes1 = document.querySelector('.form-cartes');




toggle.addEventListener('click', function() {
    body.classList.toggle('open');
})

window.addEventListener('scroll', () => {
    console.log(window.scrollY)
    if (window.scrollY >= 400) {
        ensembles.classList.add('show');
    } else{
        ensembles.classList.remove('show');
    }
    if (window.scrollY >= 900) {
       img_kineo.classList.add('show');
    } else{
        img_kineo.classList.remove('show');
    } 
    if (window.scrollY >= 1700) {
        img_mouveo.classList.add('show');
     } else{
        img_mouveo.classList.remove('show');
     } 
    if (window.scrollY >= 2600) {
       img_osteo.classList.add('show');
    } else{
       img_osteo.classList.remove('show');
    } 
    if (window.scrollY >= 3400) {
        cabinet.classList.add('show');
        telephone.classList.add('show');
        email.classList.add('show');
     } else{
        cabinet.classList.remove('show');
        telephone.classList.remove('show');
        email.classList.remove('show');
     } 
     
});


window.addEventListener('pageshow', () => {
    rectangle.classList.add('show');
});
window.addEventListener('pageshow', () => {
    form_cartes1.classList.add('show');
});