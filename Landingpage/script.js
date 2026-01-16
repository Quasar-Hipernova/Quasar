/* Datos de los autos */
const popularCars = [
    {
        name: "Koenigsegg",
        type: "Sport",
        image: "../Landingpage/img/Car1.png",
        fuel: 90,
        transmission: "Manual",
        people: 2,
        price: 99,
        originalPrice: null,
        isFavorite: false
    },
    {
        name: "Nissan GT-R",
        type: "Sport",
        image: "../Landingpage/img/Car2.png",
        fuel: 80,
        transmission: "Manual",
        people: 2,
        price: 80,
        originalPrice: 100,
        isFavorite: false
    },
    {
        name: "Roll-Royce",
        type: "Sedan",
        image: "../Landingpage/img/Car3.png",
        fuel: 70,
        transmission: "Manual",
        people: 4,
        price: 96,
        originalPrice: null,
        isFavorite: false
    },
    {
        name: "Nissan GT-R",
        type: "Sport",
        image: "../Landingpage/img/Car4.png",
        fuel: 80,
        transmission: "Manual",
        people: 2,
        price: 80,
        originalPrice: 100,
        isFavorite: false
    }
];

const recommendationCars = [
    {
        name: "All New Rush",
        type: "SUV",
        image: "../Landingpage/img/Car5.png",
        fuel: 70,
        transmission: "Manual",
        people: 6,
        price: 72,
        originalPrice: 80,
        isFavorite: false
    },
    {
        name: "CR - V",
        type: "SUV",
        image: "../Landingpage/img/Car6.png",
        fuel: 80,
        transmission: "Manual",
        people: 6,
        price: 80,
        originalPrice: null,
        isFavorite: false
    },
    {
        name: "All New Terios",
        type: "SUV",
        image: "../Landingpage/img/Car7.png",
        fuel: 90,
        transmission: "Manual",
        people: 6,
        price: 74,
        originalPrice: null,
        isFavorite: false
    },
    {
        name: "CR - V",
        type: "SUV",
        image: "../Landingpage/img/Car8.png",
        fuel: 80,
        transmission: "Manual",
        people: 6,
        price: 80,
        originalPrice: null,
        isFavorite: false
    },
    {
        name: "MGZX Exclusive",
        type: "Hatchback",
        image: "../Landingpage/img/Car9.png",
        fuel: 70,
        transmission: "Manual",
        people: 4,
        price: 76,
        originalPrice: 80,
        isFavorite: false
    },
    {
        name: "New MG ZS",
        type: "SUV",
        image: "../Landingpage/img/Car10.png",
        fuel: 80,
        transmission: "Manual",
        people: 6,
        price: 80,
        originalPrice: null,
        isFavorite: false
    },
    {
        name: "MG ZX Excite",
        type: "Hatchback",
        image: "../Landingpage/img/Car11.png",
        fuel: 90,
        transmission: "Manual",
        people: 4,
        price: 74,
        originalPrice: null,
        isFavorite: false
    },
    {
        name: "New MG ZS",
        type: "SUV",
        image: "../Landingpage/img/Car12.png",
        fuel: 80,
        transmission: "Manual",
        people: 6,
        price: 80,
        originalPrice: null,
        isFavorite: false
    }
];

// Función para crear HTML de una tarjeta
function createCarCard(car, index) {
    const heartClass = car.isFavorite ? "fa-solid" : "fa-regular";
    const discount = car.originalPrice
        ? `<span class="discount">$${car.originalPrice.toFixed(2)}</span>`
        : "";

    return `
        <article class="car-card added" data-index="${index}">
            <header class="card-top">
                <div>
                    <h4>${car.name}</h4>
                    <span>${car.type}</span>
                </div>
                <i class="${heartClass} fa-heart favorite-icon"></i>
            </header>
            <div class="car-image">
                <img src="${car.image}" alt="${car.name}" class="image-car">
            </div>
            <div class="card-specs">
                <span><i class="fa-solid fa-gas-pump"></i> ${car.fuel}L</span>
                <span><i class="fa-solid fa-car"></i> ${car.transmission}</span>
                <span><i class="fa-solid fa-user-group"></i> ${car.people} People</span>
            </div>
            <footer class="card-bottom">
                <span>
                    $${car.price.toFixed(2)}
                    <span class="secondary-text">/ day</span>
                    ${discount}
                </span>
                <button class="rent-btn">Rent Now</button>
            </footer>
        </article>
    `;
}

// Renderizar autos en una sección
function renderCars(containerId, cars) {
    const container = document.getElementById(containerId);
    
    let text = "";
    let i = 0; 
    if (!container) return;
    cars.forEach(el => {
        text += createCarCard(el, i++)
    });
    container.innerHTML += text;
}

// Funcionalidad del corazón (favorito)
function handleFavoriteClick(event, cars) {
    const icon = event.target.closest(".favorite-icon");
    if (!icon) return;

    const card = icon.closest(".car-card");
    const index = card.dataset.index;
    cars[index].isFavorite = !cars[index].isFavorite;
    icon.classList.toggle("fa-regular");
    icon.classList.toggle("fa-solid");
}

// Funcionalidad básica del botón Rent Now
function handleRentClick(event) {
    const button = event.target.closest(".rent-btn");
    if (!button) return;

    const carName = button.closest(".car-card").querySelector("h4").textContent;
    alert(`¡Estás rentando el ${carName}!`);
}

// Inicializar al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    renderCars("popular-cars-grid", popularCars);
    renderCars("recommendation-cars-grid", recommendationCars);

    document.addEventListener("click", event => {
        handleFavoriteClick(event, recommendationCars);
        handleRentClick(event);
    });
});