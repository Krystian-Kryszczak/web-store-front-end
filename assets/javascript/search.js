document.querySelectorAll(".sb-c-li").forEach((item)=>{
    item.querySelector('input[type=checkbox]').onclick = ()=>{
        item.classList.toggle('show');
    };
    item.querySelectorAll('.sb-sc-li').forEach((item_)=>{
        item_.querySelector('input[type=checkbox]').onclick = ()=>{
            item_.classList.toggle('show');
        }
    });
});
window.onload = ()=>{
    document.querySelectorAll('.sb-c-li > input[type=checkbox], .sb-sc-li > input[type=checkbox]').forEach((item)=>{
        item.checked = false;
    });
};
const tech = document.querySelectorAll('.product-technical-data');
document.querySelectorAll('.product-technical-btn').forEach((btn, i)=>{
    btn.onclick = ()=>{
        btn.style.opacity=0; tech[i].classList.add('show');
        setTimeout(()=>{btn.style.display="none"; tech[i].style.opacity=1;}, 500);
    };
});