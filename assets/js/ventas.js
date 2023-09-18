//-------------------IMPORTACIONES
import propiedadesAlquiler from "./pAlquiler.js";
import propiedadesVenta from "./pVentas.js";

// console.log(propiedadesAlquiler);
// console.log(propiedadesVentas);

//-------------------ELEMENTOS DEL DOM

const containerCards = document.querySelector("#listado-ventas");
const containerRent = document.querySelector("#listado-alquiler");

//-------------------FUNCIONES

const buildingCards = () => {
  propiedadesVenta.forEach((propiedades) => {
    // console.log(propiedades);
    const card = document.createElement("div");
    card.className = `col-md-4 mb-4`;
    card.innerHTML = `
  <div class="card">
    <img src=${propiedades.src} />
    <div class="card-body">
      <h5 class="card-title">${propiedades.nombre}</h5>
      <p class="card-text">
        ${propiedades.descripcion}
      </p>
      <p>
        <i class="fas fa-map-marker-alt"></i> ${propiedades.ubicacion}
      </p>
      <p>
        <i class="fas fa-bed"></i>${propiedades.habitaciones} |
        <i class="fas fa-bath"></i>${propiedades.baños}
      </p>
      <p><i class="fas fa-dollar-sign"></i>${propiedades.costo}</p>
        ${
          propiedades.smoke
            ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>'
            : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'
        }
        ${
          propiedades.pets
            ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>'
            : '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'
        }
    </div>
  </div>
    `;

    containerCards.appendChild(card);
  });
};

const cardsBuilt = () => {
  propiedadesAlquiler.forEach((propiedadesRent) => {
    const card2 = document.createElement("div");
    card2.className = `col-md-4 mb-4`;
    card2.innerHTML = `
      <div class="card">
        <img src=${propiedadesRent.src} />
        <div class="card-body">
          <h5 class="card-title">${propiedadesRent.nombre}</h5>
          <p class="card-text">
            ${propiedadesRent.descripcion}
          </p>
          <p>
            <i class="fas fa-map-marker-alt"></i> ${propiedadesRent.ubicacion}
          </p>
          <p>
            <i class="fas fa-bed"></i>${propiedadesRent.habitaciones} |
            <i class="fas fa-bath"></i>${propiedadesRent.baños}
          </p>
          <p><i class="fas fa-dollar-sign"></i>${propiedadesRent.costo}</p>
            ${
              propiedadesRent.smoke
                ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>'
                : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'
            }
            ${
              propiedadesRent.pets
                ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>'
                : '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'
            }
        </div>
      </div>
        `;

    containerRent.appendChild(card2);
  });
};

//-------------------RENDER

buildingCards();
