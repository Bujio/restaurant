//H1
export const makeH1 = (text) => {
  const h1 = document.createElement("h1");
  h1.textContent = text;
  return h1;
};

//H2
export const makeH2 = (text) => {
  const h2 = document.createElement("h2");
  h1.textContent = text;
  return h2;
};

//P
export const makeP = (text) => {
  const p = document.createElement("p");
  p.textContent = text;
  return p;
};

//FORMULARIO

  export const createForm = (config) => {
    const { action = "/procesar-datos", method = "post", inputs = [] } = config;

    const form = document.createElement("form");
    form.setAttribute("action", action);
    form.setAttribute("method", method);

    inputs.forEach((inputConfig) => {
      const input = document.createElement("input");

      // Aplica todos los atributos del objeto de configuración
      Object.entries(inputConfig).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          input.setAttribute(key, value);
        }
      });

      form.appendChild(input);
    });

    return form;
  };

