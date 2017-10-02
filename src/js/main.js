var loginTab= $('.tab li');
var slider = $('.sign-up .slider');
var idx=0;
var form = $('.form-group');
var windows = $(window);
var wWith = windows.width();


function move() {
  if(idx === 2){
    idx=0;
  }
  loginTab.removeClass('active');
  form.removeClass('active');
  loginTab.eq(idx).addClass('active');
  form.eq(idx).addClass('active');
  if(idx>0){
    slider.addClass('right');
  }else {
    slider.removeClass('right');
  }
}

$(document).ready(function() {
  loginTab.click(function() {
    idx=$(this).index();
    move();
  });
  $('[data-login="trigger"]').click(function(e) {
    e.preventDefault();
    idx++;
    move();
  });
  $('.text-animate p').addClass('animate');
  $('.limiter').addClass('animate');
  if($('body').hasClass('index')){
    $('.owl-carousel').owlCarousel({
      nav:false,
      indicator:false,
      dots:false,
      loop:true,
      margin:0,
      items:1,
      autoplay:true,
      autoplayTimeout:4000,
      autoplayHoverPause:false,
      responsive:{
        0:{
          items:2,
          margin:10
        },
        769:{
          items:1,
          margin:0
        }
      }
    });
  }
}).scroll(function(){
  var wScroll = $(this).scrollTop();
  var navbar = $('.navbar.navbar-default');
  if(wScroll >= 40) navbar.addClass('scroll');
  else navbar.removeClass('scroll');
});
windows.resize(function(){
  if(wWith != windows.width()){
    location.reload(true);
    console.log("jsdjskd");
  }
});