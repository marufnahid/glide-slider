/* Brand section type carousel */

var glide = new Glide('.glide-brand-carousel', {
    type: 'carousel',
    perView: 4,
    focusAt: 4,
    gap: 40,
    autoplay: false,//default false
    hoverpause: true, //default true
    animationDuration:1000,
    breakpoints: {
      800: {
        perView: 2
      },
      480: {
        perView: 1
      }
    }
  })
  
glide.mount()

/* Brand section type carousel */
  //=======================================================================
/* Testimonial section glide slider */

var glide_testimonial = new Glide('.glide-testimonial', {
  type: 'carousel',
  perView: 2,
  focusAt: 2,
  gap: 40,
  autoplay: false,//default false
  hoverpause: true, //default true
  animationDuration:1000,
  breakpoints: {
    800: {
      perView: 2
    },
    480: {
      perView: 1
    }
  }
})

glide_testimonial.mount();

/* Testimonial section glide slider */
 //=======================================================================

 /* Full screen glide slider  */

var glide_fullscreen = new Glide('.glide-fullscreen', {
  type: 'carousel',
  perView: 1,
  focusAt: 2,
  gap: 40,
  autoplay: false,//default false
  hoverpause: true, //default true
  animationDuration:1000,
  breakpoints: {
    800: {
      perView: 1
    },
    480: {
      perView: 1
    }
  }
})

glide_fullscreen.mount();
/* Full screen glide slider  */
 //=======================================================================

 /* hero section glide slider */
var glide_hero = new Glide('.glide-hero', {
  type: 'carousel',
  perView: 1,
  focusAt: 2,
  gap: 40,
  autoplay: false,//default false
  hoverpause: true, //default true
  animationDuration:1000,
  breakpoints: {
    800: {
      perView: 1
    },
    480: {
      perView: 1
    }
  }
})

glide_hero.mount()
/* hero section glide slider */