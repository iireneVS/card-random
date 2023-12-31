/* eslint-disable */
import "bootstrap";
import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

function newCard() {
  let suits = ["♦", "♥", "♠", "♣"];
  let numbers = [
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

  //Genera los índices aleatorios

  let indexSuits = Math.floor(Math.random() * suits.length);
  let indexNumbers = Math.floor(Math.random() * numbers.length);

  //Capturar los elementos .top .number .end

  let top = document.querySelector("#top");
  let end = document.querySelector("#end");
  let number = document.querySelector("#number");

  //Asigno lo generado en los innerHTML

  top.innerHTML = suits[indexSuits];
  end.innerHTML = suits[indexSuits];
  number.innerHTML = numbers[indexNumbers];

  //Determino el color

  let currentClass =
    suits[indexSuits] == "♦" || suits[indexSuits] == "♥"
      ? "text-danger"
      : "text-dark";
  top.className = currentClass;
  end.className = currentClass;
  number.className = currentClass;
}

setInterval(() => newCard(), 5000);

window.onload = function() {
  newCard();
};

let btnNewCard = document.querySelector("#btnNewCard");
btnNewCard.addEventListener("click", () => newCard());
