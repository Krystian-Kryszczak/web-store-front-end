let countDownDate = new Date(document.querySelector('.promo-timer').dataset.dateTo).getTime();

let p_hours = document.querySelector('.p-h');
let p_minuts = document.querySelector('.p-min');
let p_secounds = document.querySelector('.p-sec');

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  // let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let hours = Math.floor(distance / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

// TODO remove days / if days < 1 not show
if (hours < 10) {hours="0"+hours}
if (minutes < 10) {minutes="0"+minutes}
if (seconds < 10) {seconds="0"+seconds}

// Display the result in the element with id="demo"

p_hours.innerHTML = hours;
p_minuts.innerHTML = minutes;
p_secounds.innerHTML = seconds;

  //document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  //+ minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.querySelector('.promo-timer').innerHTML = "<h3 class=\"u-line\">Promocja nieaktułalna!</h3>";
  }
}, 1000);

function copy(text)
{
	if (navigator.clipboard) {
		navigator.clipboard.writeText(text).then(() => {
			console.log("Pomyślnie skopiowano tekst.");
      showCopyInfo("Pomyślnie skopiowano tekst.", false);
		}, (err) => {
			console.error("Nie można skopiować tekstu: ", err);
      showCopyInfo("Nie można skopiować tekstu: " + err, true);
		});
	}	else {
	   console.error("Nie można skopiować tekstu.");
     showCopyInfo("Nie można skopiować tekstu.", true);
	}
}
document.querySelector(".promo-code-btn").addEventListener('click', ()=>{
  copy(document.querySelector('.promo-code-value').innerHTML);
});
function cl(e) {
  let p = e.parentElement;
  p.style.opacity = 0;
  setTimeout(()=>{p.remove();}, 500);
}
function showCopyInfo(info, b) {
  let c = "";
  if (b) {c = " error";}
  document.body.insertAdjacentHTML('afterbegin', '<div class="w-info' + c + '"><p>' + info + '</p><i class="info-close fas fa-times" onclick="cl(this);"></i></div>');
  setTimeout(()=>{
     let info = document.querySelector('.w-info > .info-close');
     if (info!==null) {cl(info);}
  }, 2500);
}
