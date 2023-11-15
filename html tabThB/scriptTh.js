// Cache the DOM
var buton = document.getElementById("buton")
var nume = document.getElementById("nume")
var prenume = document.getElementById("prenume")
var email = document.getElementById("email")
var poza = document.getElementById("poza")
var educatie = document.getElementById("educatie")
var workingplace = document.getElementById("workingplace")
var colors = ['#FFADAD', '#FFD6A5', '#FDFFB6', '#E4F1EE', '#D9EDF8','#DEDAF4']
var currentColorIndex = 0;
var an = document.getElementById("anNastere")
// Add eventListeners

buton.addEventListener("click", altaViata)
an.addEventListener("mouseover", displayAge)

const d = new Date();
var anCurent = d.getFullYear()

function altaViata ()
{
    nume.innerHTML = "Functie: Senior Python developer"
    prenume.innerHTML = "Functie: Teolog"
    email.innerHTML = "botizan.thomas@yahoo.com"
    educatie.innerHTML = "<ol><li>Doresc premii la diverse concursuri de programare</li><li>Note mari la examene</li><li>Parcurgerea unor programe de internship pentru a obtine experienta in munca inca din facultate</li></ol>" 
    workingplace.innerHTML = "Locuri de munca"
    poza.src = "Biblie.jpg"
    // Alegeți următoarea culoare din array
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    var nextColor = colors[currentColorIndex];
    // Schimbați culoarea de fundal a paginii
    document.body.style.background = nextColor;
    poza
}

function displayAge ()
{
    an.innerHTML = anCurent - an.innerHTML
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

