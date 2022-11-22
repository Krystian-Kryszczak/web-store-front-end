document.querySelector('.info-close').addEventListener('click', ()=>{
  document.querySelector('.info-close').remove();
  document.querySelector('.info').style.opacity = 0;
  setTimeout(()=>{
    document.querySelector('.info').remove();
  }, 500);
});
