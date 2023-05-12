var banner = document.createElement("div");
banner.style.position = "fixed";
banner.style.top = "0";
banner.style.left = "0";
banner.style.width = "100%";
banner.style.backgroundColor = "yellow";
banner.style.color = "black";
banner.style.fontSize = "20px";
banner.style.padding = "10px";
banner.style.textAlign = "center";
banner.style.display = "flex";
banner.style.justifyContent = "space-around";
banner.style.flexWrap = "wrap";
banner.innerHTML = "Limited Time Offer!";

var hourCountdown = document.createElement("span");
hourCountdown.style.fontWeight = "bold";
hourCountdown.style.margin = "5px";
banner.appendChild(hourCountdown);

var minuteCountdown = document.createElement("span");
minuteCountdown.style.fontWeight = "bold";
minuteCountdown.style.margin = "5px";
banner.appendChild(minuteCountdown);

var countdown = document.createElement("span");
countdown.style.fontWeight = "bold";
countdown.style.margin = "5px";
banner.appendChild(countdown);

var discountCode = document.createElement("span");
discountCode.style.fontWeight = "bold";
discountCode.style.margin = "5px";
discountCode.innerHTML = "GET 10% OFF use Code: EXAM START";
banner.appendChild(discountCode);

document.body.insertBefore(banner, document.body.firstChild);

var countdownTime = 3600;
var minuteCountdownTime = 60;

function updateCountdown() {
  var hours = Math.floor(countdownTime / 3600);
  var minutes = Math.floor((countdownTime % 3600) / 60);
  var seconds = countdownTime % 60;

  countdown.innerHTML = seconds + "s";
  hourCountdown.innerHTML = hours + "h";
  minuteCountdown.innerHTML = minutes + "m";

  if (countdownTime > 0) {
    countdownTime--;
    setTimeout(updateCountdown, 1000);
  } else {
    countdownTime = 0;
  }
}

updateCountdown();
