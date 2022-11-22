const previews = document.querySelectorAll('.product-images-preview > .image-preview');
function clearActives() {
  previews.forEach((item)=>{
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    }
  });
}
previews.forEach((item)=>{
  item.onclick = ()=>{
    clearActives();
    item.classList.add('active');
    document.querySelector('.product-img > img').src = item.children[0].src;
  };
});
if (document.querySelector('.fpc')!==null) {
    new Glide('.recommended', {
      startAt: 0,  perView: 3,  animationDuration: 800,
      animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
      breakpoints: {
        1025: {
          perView: 1,
        },
        1500: {
          perView: 2,
        },
        1600: {
          perView: 3,
        },
        2150: {
          perView: 4,
        },
      },
    }).mount();
    new Glide('.substitutes', {
        startAt: 0,  perView: 3,  animationDuration: 800,
        animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
        breakpoints: {
          1025: {
            perView: 1,
          },
          1500: {
            perView: 2,
          },
          1600: {
            perView: 3,
          },
          2150: {
            perView: 4,
          },
        },
      }).mount();
      new Glide('.series', {
        startAt: 0,  perView: 3,  animationDuration: 800,
        animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
        breakpoints: {
          1025: {
            perView: 1,
          },
          1500: {
            perView: 2,
          },
          1600: {
            perView: 3,
          },
          2150: {
            perView: 4,
          },
        },
      }).mount();
  }