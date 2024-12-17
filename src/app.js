/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = function() {
  generateRandomCard();

  document
    .getElementById("new-card-button")
    .addEventListener("click", generateRandomCard);

  document
    .getElementById("resize-card-button")
    .addEventListener("click", () => {
      let card = document.getElementById("card");
      let widthInput = document.getElementById("card-width").value;
      let heightInput = document.getElementById("card-height").value;

      if (widthInput) card.style.width = `${widthInput}px`;
      if (heightInput) card.style.height = `${heightInput}px`;
    });

  setInterval(generateRandomCard, 10000);
};

function generateRandomCard() {
  let values = [
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
    "K",
  ];
  let suits = ["♦", "♥", "♠", "♣"];
  let suitClasses = { "♦": "diamond", "♥": "heart", "♠": "spade", "♣": "club" };

  let randomValue = Math.floor(Math.random() * values.length);
  let randomSuit = Math.floor(Math.random() * suits.length);

  let card = document.getElementById("card");
  let suitHeader = document.getElementById("card-suit-header");
  let cardNumber = document.getElementById("card-number");
  let suitFooter = document.getElementById("card-suit-footer");

  suitHeader.textContent = suits[randomSuit];
  cardNumber.textContent = values[randomValue];
  suitFooter.textContent = suits[randomSuit];

  card.classList.remove("spade", "club", "heart", "diamond");
  let suitClass = suitClasses[suits[randomSuit]];
  card.classList.add(suitClass);
}
