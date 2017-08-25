//config
const obj = (function() {

let currentSlide = 1;
let moveLeft = 470;
let animationSpeed = 500;
let arrLeft = $('#arr-left');

var numSlide = $('.dogs div').length;





function startSlide() {
       $('.dogs').animate({
       	'margin-left':'-='+moveLeft,
       	'transition': '1s all cubic-bezier(0.18, 0.89, 0.32, 1.28)',
'-webkit-transition': '1s all cubic-bezier(0.18, 0.89, 0.32, 1.28)'
       }, animationSpeed, function() {
     currentSlide++;
if(currentSlide >= 5) {
  currentSlide = 1;
$('.dogs').animate({'margin-left':'0'},1000);
}
else if(currentSlide === 5) {
currentSlide = 1;
$('.dogs').animate({'margin-left':'0'},1000);
}
}); 
}    



function anonos() {
startSlide();
setTimeout(anonos,10000);	
}
anonos();



function backSlide() {
      $('.dogs').animate({'margin-left':'+='+moveLeft, 'transition':'1s all ease','-webkit-transition': '1s all ease'}, animationSpeed, function() {

currentSlide--;
if(currentSlide <= 0) {
currentSlide = numSlide-1;
$('.dogs').animate({'margin-left':'-470'},1000);

}

else if(currentSlide <= numSlide) {
currentSlide = numSlide-1;
$('.dogs').animate({'margin-left':'-470'},1000);
}
}); 
} 


$(document).keydown(function(e){
if(e.keyCode === 39) {
	startSlide();
}

})


$(document).keydown(function(e){
if(e.keyCode === 37) {
	//backSlide();
}

})



}());
