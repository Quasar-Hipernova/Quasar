// Contenedores de las grillas
const popularGrid = document.getElementById("popular-grid");
const recommendGrid = document.getElementById("recommend-grid");

// --- 1. BASE DE DATOS INICIAL (Tus autos de siempre) ---
let PopularCars = [
    { id: 1, isFavorite: false, name: "Koenigsegg", type: "Sport", imgLink: "../Landingpage/img/Car1.png", liters: 90, manual: true, people: 2, price: 99 },
    { id: 2, isFavorite: true, name: "Nissan GT-R", type: "Sport", imgLink: "../Landingpage/img/Car2.png", liters: 80, manual: true, people: 2, price: 80, totalPrice: 100 },
    { id: 3, isFavorite: false, name: "Roll-Royce", type: "Sedan", imgLink: "../Landingpage/img/Car3.png", liters: 70, manual: true, people: 4, price: 96 },
    { id: 4, isFavorite: false, name: "Nissan GT-R", type: "Sport", imgLink: "../Landingpage/img/Car4.png", liters: 80, manual: true, people: 2, price: 80, totalPrice: 100 }
];

let RecommendCars = [
    { id: 5, isFavorite: false, name: "All New Rush", type: "SUV", imgLink: "../Landingpage/img/Car5.png", liters: 70, manual: true, people: 6, price: 72, totalPrice: 80 },
    { id: 6, isFavorite: false, name: "CR - V", type: "SUV", imgLink: "../Landingpage/img/Car6.png", liters: 80, manual: true, people: 6, price: 80 },
    { id: 7, isFavorite: false, name: "All New Terios", type: "SUV", imgLink: "../Landingpage/img/Car7.png", liters: 90, manual: true, people: 6, price: 74 },
    { id: 8, isFavorite: false, name: "CR - V", type: "SUV", imgLink: "../Landingpage/img/Car8.png", liters: 80, manual: true, people: 6, price: 80 }
];

// --- 2. FUNCIÓN MÁGICA: CARGAR DESDE DASHBOARD ---
function cargarAutosNuevos() {
    // Leemos la "caja fuerte" del navegador
    const nuevosAutosJSON = localStorage.getItem('misAutosNuevos');
    
    if (nuevosAutosJSON) {
        const nuevosAutos = JSON.parse(nuevosAutosJSON);
        
        // Los distribuimos según la sección que elegiste en el Dashboard
        nuevosAutos.forEach(car => {
            if (car.section === 'popular') {
                PopularCars.push(car);
            } else {
                RecommendCars.push(car);
            }
        });
    }
}

// --- 3. FUNCIONES DE RENDERIZADO (Sin cambios) ---
function createCarCard(car) {
    const heartClass = car.isFavorite ? "fa-solid fa-heart" : "fa-regular fa-heart";
    const discountHTML = car.totalPrice ? `<span class="discount">$${car.totalPrice.toFixed(2)}</span>` : "";

    return `
      <article class="car-card" data-id="${car.id}">
        <header class="card-top">
          <div>
            <h4>${car.name}</h4>
            <span>${car.type}</span>
          </div>
          <i class="${heartClass}" data-heart></i>
        </header>
        <div class="car-image"><img src="${car.imgLink}" class="image-car"></div>
        <div class="card-specs">
          <span><i class="fa-solid fa-gas-pump"></i> ${car.liters}L</span>
          <span><i class="fa-solid fa-car"></i> Manual</span>
          <span><i class="fa-solid fa-user-group"></i> ${car.people} People</span>
        </div>
        <footer class="card-bottom">
          <span>$${car.price}.00 / <span class="secondary-text">day</span> ${discountHTML}</span>
          <button>Rent Now</button>
        </footer>
      </article>`;
}

function renderAll() {
    popularGrid.innerHTML = PopularCars.map(car => createCarCard(car)).join('');
    recommendGrid.innerHTML = RecommendCars.map(car => createCarCard(car)).join('');
}

// --- 4. EJECUCIÓN ---
cargarAutosNuevos(); // IMPORTANTE: Primero cargamos lo del Dashboard
renderAll();        // Luego dibujamos todo en pantalla

// Delegación de eventos para el corazón (favoritos)
document.addEventListener("click", (e) => {
    const heart = e.target.closest("[data-heart]");
    if (!heart) return;
    const card = heart.closest(".car-card");
    const carId = Number(card.dataset.id);
    const car = [...PopularCars, ...RecommendCars].find(c => c.id === carId);
    if (car) {
        car.isFavorite = !car.isFavorite;
        renderAll();
    }
});