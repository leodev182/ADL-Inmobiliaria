//-------------------IMPORTACIONES
import propiedadesAlquiler from "./pAlquiler.js";

//-------------------ELEMENTOS DEL DOM

const containerRent = document.querySelector("#listado-alquiler");

//-------------------FUNCIONES
const showCards = () => {
  propiedadesAlquiler.forEach((elementos) => {
    // console.log(elementos);
    const card = document.createElement("div");
    card.className = `col-md-4 mb-4`;
    card.innerHTML = `
    <div class="card">
      <img src=${elementos.src} />
      <div class="card-body">
        <h5 class="card-title">${elementos.nombre}</h5>
        <p class="card-text">
          ${elementos.descripcion}
        </p>
        <p>
          <i class="fas fa-map-marker-alt"></i> ${elementos.ubicacion}
        </p>
        <p>
          <i class="fas fa-bed"></i>${elementos.habitaciones} |
          <i class="fas fa-bath"></i>${elementos.baños}
        </p>
        <p><i class="fas fa-dollar-sign"></i>${elementos.costo}</p>
          ${
            elementos.smoke
              ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>'
              : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'
          }
          ${
            elementos.pets
              ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>'
              : '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'
          }
      </div>
    </div>
    `;

    containerRent.appendChild(card);
  });
};

showCards();
