var randomNum1 = Math.floor((Math.random() * 6) + 1);
var randomNum2 = Math.floor((Math.random() * 6) + 1);
// console.log(randomNum1);
// console.log(randomNum2);

var heading = document.querySelector("h1");

var player1 = document.querySelector(".img1");
var player2 = document.querySelector(".img2");

player1.setAttribute("src", "pics/dice" + randomNum1 + ".png");
player2.setAttribute("src", "pics/dice" + randomNum2 + ".png");

if (randomNum1 > randomNum2) {
  heading.innerText = "🚩Player 1 wins!";
} else if (randomNum1 < randomNum2) {
  heading.innerText = "Player 2 wins!🚩";
} else {
  heading.innerText = "Draw!";
}
