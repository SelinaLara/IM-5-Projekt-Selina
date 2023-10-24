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


//GOOGLE MAP