
$(document).ready(function(){

  if($('.brands_slider').length)
  {
  var brandsSlider = $('.brands_slider');
  
  brandsSlider.owlCarousel(
  {
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  nav: false,
  dots: true,
  autoWidth: true,
  items: 4,
  margin: 22
  });
  
  if($('.brands_prev').length)
  {
  var prev = $('.brands_prev');
  prev.on('click', function()
  {
  brandsSlider.trigger('prev.owl.carousel');
  });
  }
  
  if($('.brands_next').length)
  {
  var next = $('.brands_next');
  next.on('click', function()
  {
  brandsSlider.trigger('next.owl.carousel');
  });
  }
  }
  
  });

$(document).ready(function(){

  if($('.rectangle-brands_slider').length)
  {
  var rectanglebrandsslider = $('.rectangle-brands_slider');
  
  rectanglebrandsslider.owlCarousel(
  {
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  nav: false,
  dots: true,
  autoWidth: true,
  items: 2,
  margin: 22
  });
  
  if($('.brands_prev').length)
  {
  var prev = $('.brands_prev');
  prev.on('click', function()
  {
  rectanglebrandsslider.trigger('prev.owl.carousel');
  });
  }
  
  if($('.brands_next').length)
  {
  var next = $('.brands_next');
  next.on('click', function()
  {
  rectanglebrandsslider.trigger('next.owl.carousel');
  });
  }
  }
  
  });
