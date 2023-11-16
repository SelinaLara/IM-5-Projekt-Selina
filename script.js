// SMOOTH SCROLL DOWN 
$(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });

  
//SCROLL BACK TO TOP
$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 400) {
      $('.back-to-top').fadeIn();
    } else {
      $('.back-to-top').fadeOut();
    }
  });

 //CAROUSEL 
const carouselItems = document.querySelectorAll(".carousel_item"); 
let i = 1;

setInterval(() => {
// Accessing All the carousel Items
 Array.from(carouselItems).forEach((item,index) => {

   if(i < carouselItems.length){
    item.style.transform = `translateX(-${i*100}%)`
   }
  })
  if(i < carouselItems.length){
    i++;
  }
  else{
    i=0;
  }
},2000)


//Aktiver Link
var fullPath = location.pathname; 
console.log('Voller Pfad:', fullPath);

var fileName = fullPath.split('/').pop();
console.log('Dateiname:', fileName);

var links = document.querySelectorAll('nav a');
links.forEach(function(link) {
    if (link.getAttribute('href') == fileName) {
        link.classList.add('active');
    }
});


//Slideshow mit Controller
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var y;
  var x = document.getElementsByClassName("Slideshow");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (y = 0; y < x.length; y++) {
    x[y].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}