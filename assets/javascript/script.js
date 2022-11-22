if (document.querySelector('.fpc')!==null) {new Glide('.glide', {autoplay: 5000, animationDuration: 1000}).mount();}
if (document.querySelector('.fpc')!==null) {
  new Glide('.glide2', {
    startAt: 0,  perView: 3,  animationDuration: 800,
    animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
    breakpoints: {
      1025: {
        perView: 1,
      },
      1500: {
        perView: 2,
      },
      2000: {
        perView: 3,
      },
    },
  }).mount();
}
if (document.querySelector('.fpc')!==null) {
  new Glide('.fpc', {
    startAt: 0,  perView: 4,  animationDuration: 800,
    animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
    breakpoints: {
      855: {
        perView: 1,
      },
      1175: {
        perView: 2,
      },
      1560: {
        perView: 3,
      },
      2000: {
        perView: 4,
      },
    },
  }).mount();
}
const nav = document.querySelector('.nav');
document.querySelectorAll('.nav-btn').forEach((item) => {
item.onclick = ()=> {
  nav.classList.toggle('show');
}});
const arr = document.querySelectorAll('.nav div,.nav ul,.nav li,.nav p,.nav a,.nav-header,.nav-header > h3,.nav-btn,.nav-btn > span');
document.body.onclick = (e)=>{
if ((()=>{for (let i = 0; i < arr.length; i++) {if (arr[i] == e.target) {return false;}}return true;})()) {
  nav.classList.remove('show');
}};
const c = document.querySelector('.categoryies');
const v = document.querySelector('.c-list').children.length;
/* Desktop Nav */
c.onmouseover = ()=>{
if (window.innerWidth > 1024 && !c.classList.contains("hc")) {
  c.style.height = "calc(calc(calc(2.2875em + 1px) * " + v + ") + 1px)";
}};
c.onmouseout = ()=>{
if (window.innerWidth > 1024 && !c.classList.contains("hc")) {
  c.style.height = "calc(63.5vh - .685em)";
}};
/* Mobile Nav */
const c_item = document.querySelector('.nav-li-c-item');
c_item.onmouseover = ()=>{
if (window.innerWidth < 1025 || c.classList.contains("hc")) {
  c.style.height = "calc(2.2875em * " + v + ")";
}};
c_item.onmouseout = ()=>{
if (window.innerWidth < 1025 || c.classList.contains("hc")) {
  c.style.height = 0;
}};
