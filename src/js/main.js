var loginTab= $('.tab li');
var slider = $('.sign-up .slider');
var idx=0;
var form = $('.form-group');
var windows = $(window);
var wWith = windows.width();
var body = $('body');
var a;
var counter = 0;
var formWrapper = $('.form-wrapper');

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
  if(body.hasClass('index')){
    $('.owl-carousel').owlCarousel({
      nav:false,
      dots:false,
      loop:true,
      margin:0,
      items:1,
      autoplay:true,
      autoplayTimeout:4000,
      autoplayHoverPause:false,
      lazyLoad:true,
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
  } else if (body.hasClass('produk')){
    var ratingDOM = $('.rating');
    var rating = parseInt(ratingDOM.attr('data-rating'));
    var sliderProduk = $('.produk .img-slide');
    var sliderProdukChildLength = sliderProduk.children().eq(0).innerWidth();
    sliderProduk.width(sliderProdukChildLength * 3).children().width(sliderProdukChildLength);
    if($(this).width()>768){
      sliderProduk.hover(function () {
        sliderProduk.addClass('open');
        clearInterval(a);
      }).mouseleave(function () {
        sliderProduk.removeClass('open');
        slide();
      });
    }
    ratingDOM.children().each(function(i){
      if(i>=rating){
        return false;
      }
      $(this).addClass('colored');
    });
    slide();
    sliderProduk.find('figure').click(function(){
      $('.produk .lightbox img').attr('src', $(this).find('img').attr('src'));
      lightbox();
    });
    $('.lightbox').click(function(e){
      if ($(e.target).hasClass('lightbox') || $(e.target).hasClass('tutup')){
        lightbox();
      }
    });
  }
  $('.pesan input, .pesan textarea').focus(function(){
    $(this).addClass('focus');
  });
  $('.pesan input').blur(function(){
    var $this = $(this);
    if($this.val()===''){
      $this.removeClass('focus');
    }
  });
  $('[data-toggle="tooltip"]').tooltip();
  $('.h2-title').click(function(){
    $(this).closest('.form-pemesanan').addClass('exit');
    console.log("enteire");
  });
  
  
  
  // order
  fitForm();
  var orderCount=0;
  $('.btn-next-order').click(function(e){
    e.preventDefault();
    fitForm();
    var kondisi=true;
    formWrapper.find('.active input').each(function(){
      var $this = $(this);
      if($this.val()===''){
        $this.removeClass('animated shake red').delay(10).queue(function () {
          $this.addClass('animated shake red');
          $(this).dequeue();
        });
        kondisi=false;
      }
    });
    if(kondisi){
      formWrapper.find('.active').slideToggle(600);
      orderCount++;
      formWrapper.find('.form-pemesanan').removeClass('active').eq(orderCount).addClass('active');
      $('.order .list li').each(function () {
        var $this = $(this);
        if ($this.index() <= orderCount) {
          $this.addClass('active');
        }
      });
    }
  });
}).scroll(function(){
  var wScroll = $(this).scrollTop();
  var navbar = $('.navbar.navbar-default');
  if(wScroll >= 40) navbar.addClass('scroll');
  else navbar.removeClass('scroll');
});
windows.resize(function(){
  if(wWith != windows.width()){
    location.reload(true);
  }
});

function slide(){
  a= setInterval(function(){
    if(counter<-200) counter=0;
    $('.produk .img-slide').css({
      left:counter+'%',
    });
    counter-=100;
  },3000);
}
function lightbox(){
  $('.lightbox').toggleClass('hidden');
  $('.wrapper-all').toggleClass('blur');
}
function fitForm(){
  formWrapper.css('minHeight', formWrapper.find('.active').innerHeight());
  alert("hai");
}