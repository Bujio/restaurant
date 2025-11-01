import "./styles/styles.css";
import { renderPizzas } from "./pizzaFunction";
import { aboutPage } from "./about";
import { contactPage } from "./contact";

const botonAbout = document.querySelector(".about");

botonAbout.addEventListener("click", () => {
  clearContent();
  aboutPage();
});

const buttonHome = document.querySelector(".home");

buttonHome.addEventListener("click", () => {
  clearContent();
  renderPizzas();
});

const buttonContact = document.querySelector(".contact");

buttonContact.addEventListener("click", () => {
  clearContent();
  contactPage();
});

function clearContent() {
  while (content.firstElementChild) {
    content.firstElementChild.remove();
  }
}
