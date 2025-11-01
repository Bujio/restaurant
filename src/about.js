const content = document.getElementById("content");

export const aboutPage = () => {
  const h1 = document.createElement("h3");
  h1.textContent = "Sobre nosotros";
  content.appendChild(h1);

  const pInfo1 = document.createElement("p");
  pInfo1.classList.add("info");
  pInfo1.textContent =
    "Somos una pizzería familiar donde cada pizza cuenta una historia. Inspirados en las recetas tradicionales italianas y el cariño de la cocina casera, creamos pizzas que reconfortan el alma y unen a las personas alrededor de la mesa.";

  content.appendChild(pInfo1);
  const pInfo2 = document.createElement("p");
  pInfo2.classList.add("info");
  pInfo2.textContent =
    "Nuestra masa madre fermenta lentamente durante 48 horas, nuestros ingredientes se seleccionan cada mañana y nuestro horno alcanza la temperatura perfecta para lograr esa base crujiente y bordes esponjosos que tanto te gustan.";

  content.appendChild(pInfo2);

  const pInfo3 = document.createElement("p");
  pInfo3.classList.add("info");
  pInfo3.textContent =
    "Más que una pizzería, somos un lugar donde las familias celebran, los amigos se reencuentran y se crean recuerdos deliciosos";

  content.appendChild(pInfo3);

};
