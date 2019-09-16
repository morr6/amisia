const initCarousels = () => {
  $('.owl-one').owlCarousel({
    loop:true,
    nav:true,
    dots: true,
    autoplay:true,
    lazyLoad:true,
    autoplayTimeout:3000,
    items: 1        
  })

  $('.owl-two').owlCarousel({
    loop:true,
    nav:true,
    dots: false,
    lazyLoad:true,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
      1000:{  
          items: 7
      }
    }
  })  

  $('.recommended-owl').owlCarousel({
    loop:true,
    nav:true,
    dots: false,
    lazyLoad:true,
    responsive:{
      1200:{
        items: 4
      },
      1000: {
        items: 3
      },
      650:{
        items: 2
      },
      0:{
        items: 1
      }
    }
  })

  $('.bestseller-owl').owlCarousel({
    loop:true,
    nav:true,
    dots: false,
    lazyLoad:true,
    responsive:{
      1200:{
        items: 4
      },
      1000: {
        items: 3
      },
      650:{
        items: 2
      },
      0:{
        items: 1
      }
    } 
  })
}
