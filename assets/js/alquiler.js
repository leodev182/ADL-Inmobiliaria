//-------------------ELEMENTOS DEL DOM

const containerRent = document.querySelector("#listado-alquiler");

//----------Arreglo de Alquileres

const propiedadesAlquiler = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    costo: "2.000",
    smoke: true,
    pets: false,
  },

  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: "2.500",
    smoke: true,
    pets: true,
  },

  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    costo: "2.200",
    smoke: false,
    pets: false,
  },

  {
    nombre: "L'Hymne des Trembles House",
    src: "https://lh3.googleusercontent.com/p/AF1QipPox7W9IVkgSs7oVUv63LotoXiM3ng9JAG7ISvT=s680-w680-h510",
    descripcion: "Casa privada en el bosque para vacacionar",
    ubicacion: "Chemin des Pléiades, Mont-Tremblant",
    habitaciones: 4,
    baños: 4,
    costo: "4.000",
    smoke: false,
    pets: true,
  },
];

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
