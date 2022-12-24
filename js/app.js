setInterval(myTimer, 1000);
function myTimer() {
  const date = new Date();
  document.querySelector(".hour").innerHTML = date.toLocaleTimeString();
}

let nowYear = new Date();
let year = (document.querySelector(".year").innerHTML = nowYear.getFullYear());

let month = nowYear.toLocaleString("en-US", { month: "long" });
let nowMonth = (document.querySelector(".month").textContent = month);

let day = nowYear.getDate();
let nowDay = (document.querySelector(".day").innerHTML = day);

function getDayName(date = new Date(), locale = "en-US") {
  return date.toLocaleDateString(locale, { weekday: "long" });
}
let toDay = (document.querySelector(".today").innerHTML = getDayName());
