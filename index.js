let homeScoreView = 0;
let guestScoreView = 0;
document.getElementById("homeScore").textContent = homeScoreView;
document.getElementById("guestScore").textContent = guestScoreView;

function incrementHomeOne() {
  document.getElementById("homeScore").textContent = homeScoreView += 1;
}
function incrementHomeTwo() {
  document.getElementById("homeScore").textContent = homeScoreView += 2;
}
function incrementHomeThree() {
  document.getElementById("homeScore").textContent = homeScoreView += 3;
}

function incrementGuestOne() {
  document.getElementById("guestScore").textContent = guestScoreView += 1;
}
function incrementGuestTwo() {
  document.getElementById("guestScore").textContent = guestScoreView += 2;
}
function incrementGuestThree() {
  document.getElementById("guestScore").textContent = guestScoreView += 3;
}
