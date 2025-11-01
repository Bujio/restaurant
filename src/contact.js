import { makeH1, createForm } from "./createElement";

const content = document.querySelector("#content");
export const contactPage = () => {
  content.appendChild(makeH1("Formulario"));
  content.appendChild(
    createForm({
      action: "/procesar-datos",
      method: "post",
      inputs: [
        { type: "text", placeholder: "Nombre", name: "nombre", required: "" },
        { type: "email", placeholder: "Email", name: "email", required: "" },
        { type: "tel", placeholder: "Teléfono", name: "telefono" },
        {
          type: "text",
          placeholder: "Dirección",
          name: "direccion",
          maxlength: "100",
        },
        { type: "text", placeholder: "Ciudad", name: "ciudad" },
        { type: "submit", value: "Enviar" },
      ],
    })
  );
};
