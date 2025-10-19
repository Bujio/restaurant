import pizzasDB from "./dataFood";

export const renderPizzas = () => {
  const container = document.getElementById("pizzas-container");

  pizzasDB.forEach((pizza) => {
    const nameMediana = pizza.tamaño.mediana.name;
    const priceMediana = pizza.tamaño.mediana.precio;

    const nameFamiliar = pizza.tamaño.familiar.name;
    const priceFamiliar = pizza.tamaño.familiar.precio;

    const pizzaElement = document.createElement("div");
    pizzaElement.classList.add("pizza-item");

    //Nobmre Pizza
    const namePizza = document.createElement("h2");
    namePizza.classList.add("name-pizza");
    namePizza.textContent = pizza.nombre;
    pizzaElement.appendChild(namePizza);

    //Ingredientes
    const descripcion = document.createElement("p");
    descripcion.classList.add("descripcion-ingredientes");
    descripcion.textContent = pizza.descripcion;
    pizzaElement.appendChild(descripcion);
    //Tamaño y precio
    const sizePizza = document.createElement("div");
    sizePizza.classList.add("price-size");

    const pricePizza = document.createElement("p");
    pricePizza.classList.add("price-pizza-medium");
    pricePizza.textContent =
      nameMediana +
      ": " +
      priceMediana +
      "€" +
      " | " +
      nameFamiliar +
      ": " +
      priceFamiliar +
      "€";
    sizePizza.appendChild(pricePizza);

    pizzaElement.appendChild(sizePizza);
    container.appendChild(pizzaElement);
  });
};
