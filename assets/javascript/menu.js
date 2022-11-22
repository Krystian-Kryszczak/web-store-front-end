let button = document.querySelector('.nav-button');
let nav = document.querySelector('.nav-wrapper');
let menu = document.querySelector('.nav-menu');
let btn = document.querySelector('.nav-btn');
let previousScrollTop;
let isScrolling;

function openMenu()
{
	button.classList.toggle('active');
	nav.classList.toggle('active');
	menu.classList.toggle('active');
	btn.classList.toggle('active');
}

button.addEventListener('click', openMenu, false);

function hasScrolled()
{
	let scrollTop = window.scrollY;
	
	if(scrollTop > previousScrollTop && !btn.classList.contains('active'))
	{
		button.style.top="-10%";
		button.classList.add('active');
	}
	else if(!nav.classList.contains('active'))
	{
		button.style.top="3%";
		button.classList.remove('active');
	}
	
	previousScrollTop = scrollTop;
}

document.addEventListener('scroll', function()
{
  isScrolling = true;
}, false);

setInterval(function()
{
  if (isScrolling)
  {
    hasScrolled();
    isScrolling = false;
  }
}, 100);