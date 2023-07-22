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
const massage = document.querySelector('.massage');
const marche = document.querySelector('.marche');
const coaching = document.querySelector('.coaching');


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block"; 
}
var path = window.location.pathname;
var page = path.split("/").pop();


toggle.addEventListener('click', function() {
    body.classList.toggle('open');
})

window.addEventListener('scroll', () => {
    console.log(window.scrollY)
    if (page == "accueil.html") {
        if (window.innerWidth >= 991){
            if (window.scrollY >= 400) {
                ensembles.classList.add('show');
            } 
            else{
                ensembles.classList.remove('show');
            }
        } 
        else {
            if (window.scrollY >= 10) {
                ensembles.classList.add('show');
            } 
            else{
                ensembles.classList.remove('show');
            }
        }
        if (window.scrollY >= 900) {
           img_kineo.classList.add('show');
        } 
        else{
            img_kineo.classList.remove('show');
        } 
        if (window.scrollY >= 1700) {
            img_mouveo.classList.add('show');
        } 
        else{
           img_mouveo.classList.remove('show');
        }   
    
        if (window.scrollY >= 2600) {
           img_osteo.classList.add('show');
        } 
        else{
           img_osteo.classList.remove('show');
        } 
    
        if (window.scrollY >= 3400) {
            cabinet.classList.add('show');
            telephone.classList.add('show');
            email.classList.add('show');
        } 
        else{
           cabinet.classList.remove('show');
           telephone.classList.remove('show');
           email.classList.remove('show');
        }
    }
});

if (page == "mouveo.html") {
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 800) {
            massage.classList.add('show');
            marche.classList.add('show');
            coaching.classList.add('show');
         } else{
            massage.classList.remove('show');
            marche.classList.remove('show');
            coaching.classList.remove('show');
         } 
    })
}

if (page == "accueil.html") {
    window.addEventListener('pageshow', () => {
        rectangle.classList.add('show');
    });
}

if (page == "kineo.html") {
    window.addEventListener('pageshow', () => {
        form_cartes1.classList.add('show');
    });
}














