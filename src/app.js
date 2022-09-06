/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
document.querySelector("#boton").addEventListener("click", changeCard);
function changeCard() {
  let symbol = ["♦", "♥", "♠", "♣"];
  let number = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let i = symbol.length;
  let j = number.length;
  let randomSymbol = symbol[Math.floor(Math.random() * i)];
  let randomNumber = number[Math.floor(Math.random() * j)];

  let colorRed = randomSymbol === "♥" || randomSymbol === "♦" ? "red" : "black";

  let numbers = document.querySelector(".number");
  let topCard = document.querySelector(".top-suit");
  let bottomCard = document.querySelector(".bottom-suit");

  topCard.style.color = colorRed;
  bottomCard.style.color = colorRed;

  topCard.innerHTML = randomSymbol;
  bottomCard.innerHTML = randomSymbol;
  numbers.innerHTML = randomNumber;
}
